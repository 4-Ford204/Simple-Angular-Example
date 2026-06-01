import { Component, OnInit, inject } from '@angular/core';

import { CarouselComponent } from '../../shared/ui-components/media/carousel-component/carousel-component';
import { ChartComponent } from '../../shared/ui-components/chart-component/chart-component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { TableComponent } from '../../shared/ui-components/data/table-component/table-component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, ChartComponent, CommonModule, TableComponent],
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
  carouselProducts: any[] = [];
  chartData: any;
  chartOption: any;

  private readonly productService = inject(ProductService);

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().then((response: any) => {
      this.products = response.data;
      this.carouselProducts = this.products.slice(-10);
      this.initChart();
    });
  }

  initChart() {
    const grouped = this.products.reduce(
      (result, p) => {
        result[p.studio] = [...(result[p.studio] ?? []), p];
        return result;
      },
      {} as Record<string, typeof this.products>
    );
    const keys = Object.keys(grouped);

    this.chartData = {
      labels: keys,
      datasets: [
        {
          type: 'line',
          label: 'Highest',
          borderWidth: 1,
          tension: 0.4,
          data: keys.map((studio) => Math.max(...grouped[studio].map((p: any) => p.price))),
        },
        {
          type: 'line',
          label: 'Average',
          borderWidth: 1,
          tension: 0.4,
          data: keys.map((studio) => {
            const group = grouped[studio];
            return group.reduce((sum: any, p: any) => sum + p.price, 0) / group.length;
          }),
        },
        {
          type: 'line',
          label: 'Lowest',
          borderWidth: 1,
          tension: 0.4,
          data: keys.map((studio) => Math.min(...grouped[studio].map((p: any) => p.price))),
        },
      ],
    };

    this.chartOption = {
      maintainAspectRatio: false,
    };
  }
}
