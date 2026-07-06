import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

import { AutoCompleteComponent } from '../../shared/ui-components/form/auto-complete-component/auto-complete-component';
import { ButtonComponent } from '../../shared/ui-components/button-component/button-component';
import { CarouselComponent } from '../../shared/ui-components/media/carousel-component/carousel-component';
import { ChartComponent } from '../../shared/ui-components/chart-component/chart-component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { TableComponent } from '../../shared/ui-components/data/table-component/table-component';

@Component({
  selector: 'app-home',
  imports: [
    AutoCompleteComponent,
    ButtonComponent,
    CarouselComponent,
    ChartComponent,
    CommonModule,
    TableComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit {
  @ViewChild('actionTemplate', { static: false }) actionTemplate!: TemplateRef<any>;
  columns: any[] = [];
  products: any[] = [];

  studio: string = '';
  suggestions: any[] = [];
  carouselProducts: any[] = [];

  chartData: any;
  chartOption: any;
  groupedProducts: Record<string, any[]> = {};

  private readonly productService = inject(ProductService);

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngAfterViewInit(): void {
    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'series', header: 'Series' },
      { field: 'studio', header: 'Studio' },
      { field: 'material', header: 'Material' },
      { field: 'type', header: 'Type' },
      { field: 'price', header: 'Price', sortable: true },
      { field: 'action', template: this.actionTemplate },
    ];
  }

  fetchProducts() {
    this.productService.getProducts().then((response: any) => {
      this.products = response.data;
      this.carouselProducts = this.products.slice(0, 5);
      this.groupedProducts = this.products.reduce(
        (result, p) => {
          result[p.studio] = [...(result[p.studio] ?? []), p];
          return result;
        },
        {} as Record<string, typeof this.products>
      );

      this.initChart();
    });
  }

  onActionButtonPressed(item: any) {
    this.carouselProducts = [item];
  }

  onStudioCompleted(event: any) {
    const query = event.query.toLowerCase();
    this.suggestions = Object.keys(this.groupedProducts).filter((s) =>
      s.toLowerCase().includes(query)
    );
  }

  onStudioChanged(event: any) {
    this.carouselProducts = this.groupedProducts[this.studio];
  }

  initChart() {
    const studios = Object.keys(this.groupedProducts);
    const types = [...new Set(this.products.map((p: any) => p.type))];

    this.chartData = {
      labels: studios,
      datasets: types.map((type) => ({
        type: 'bar',
        label: type,
        borderWidth: 1,
        tension: 0.4,
        data: studios.map((studio) => {
          const products = this.groupedProducts[studio].filter((p: any) => p.type == type);
          return products.length;
        }),
      })),
    };

    this.chartOption = {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          ticks: { maxRotation: 0, minRotation: 0, autoSkip: false },
        },
        y: { stacked: true },
      },
    };
  }
}
