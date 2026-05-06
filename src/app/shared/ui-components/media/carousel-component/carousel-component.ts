import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../button-component/button-component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image-component/image-component';

@Component({
  selector: 'app-carousel-component',
  imports: [ButtonComponent, CarouselModule, CommonModule, ImageComponent],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent {
  // Number of items per page.
  @Input() numVisible: number = 1;
  // Number of items to scroll.
  @Input() numScroll: number = 1;
  // Defines if scrolling would be infinite.
  @Input() circular: boolean = false;

  // An array of objects to display.
  private _products: any[] = [];
  productImages: Record<string, number> = {};

  @Input() set products(currentProducts: any[]) {
    this._products = currentProducts;
    this.productImages = {};

    for (const product of currentProducts) {
      this.productImages[product.id] = 0;
    }
  }
  get value() {
    return this._products;
  }

  onImageChanged(id: string, index: number) {
    this.productImages[id] = index;
  }
}
