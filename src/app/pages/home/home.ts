import { Component, OnInit, inject } from '@angular/core';

import { AutoCompleteComponent } from '../../shared/ui-components/form/auto-complete-component/auto-complete-component';
import { CarouselComponent } from '../../shared/ui-components/media/carousel-component/carousel-component';
import { ChartComponent } from '../../shared/ui-components/chart-component/chart-component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { TableComponent } from '../../shared/ui-components/data/table-component/table-component';

@Component({
  selector: 'app-home',
  imports: [AutoCompleteComponent, CarouselComponent, ChartComponent, CommonModule, TableComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  columns = [
    { field: 'name', header: 'Name' },
    { field: 'series', header: 'Series' },
    { field: 'studio', header: 'Studio' },
    { field: 'material', header: 'Material' },
    { field: 'price', header: 'Price', sortable: true },
  ];
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

  fetchProducts() {
    this.productService.getProducts().then((response: any) => {
      this.products = response.data;
      this.carouselProducts = this.products.slice(20, 30);
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
    const keys = Object.keys(this.groupedProducts);

    this.chartData = {
      labels: keys,
      datasets: [
        {
          type: 'line',
          label: 'Highest',
          borderWidth: 1,
          tension: 0.4,
          data: keys.map((s) => Math.max(...this.groupedProducts[s].map((p: any) => p.price))),
        },
        {
          type: 'line',
          label: 'Average',
          borderWidth: 1,
          tension: 0.4,
          data: keys.map((s) => {
            const group = this.groupedProducts[s];
            return group.reduce((sum: any, p: any) => sum + p.price, 0) / group.length;
          }),
        },
        {
          type: 'line',
          label: 'Lowest',
          borderWidth: 1,
          tension: 0.4,
          data: keys.map((s) => Math.min(...this.groupedProducts[s].map((p: any) => p.price))),
        },
      ],
    };

    this.chartOption = {
      maintainAspectRatio: false,
    };
  }
}
