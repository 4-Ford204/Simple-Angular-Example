import { Component, afterNextRender, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly productService = inject(ProductService);

  products = signal<any[]>([]);

  constructor() {
    afterNextRender(() => {
      this.fetchHomePage();
    });
  }

  async fetchHomePage() {
    const response = await this.productService.getProducts();
    this.products.set(response.data);
  }
}
