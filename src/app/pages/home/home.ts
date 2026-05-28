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

  private readonly productService = inject(ProductService);

  ngOnInit(): void {
    this.fetchHomePage();
  }

  private fetchHomePage() {
    this.productService.getProducts().then((response: any) => {
      this.products = response.data;
      this.carouselProducts = this.products.slice(-10);
    });
  }
}
