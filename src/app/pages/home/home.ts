import { Component, inject } from '@angular/core';

import { CarouselComponent } from '../../shared/ui-components/media/carousel-component/carousel-component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { TableComponent } from '../../shared/ui-components/table-component/table-component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CommonModule, TableComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly productService = inject(ProductService);

  columns = [
    { field: 'images' },
    { field: 'name', header: 'Name' },
    { field: 'studio', header: 'Studio' },
    { field: 'price', header: 'Price' },
  ];
  products: any[] = [];

  constructor() {
    this.fetchHomePage();
  }

  private fetchHomePage() {
    this.productService.getProducts().then((response: any) => {
      this.products = response.data;
    });
  }
}
