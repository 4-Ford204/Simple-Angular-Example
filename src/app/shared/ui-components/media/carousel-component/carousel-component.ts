import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonComponent } from '../../button-component/button-component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image-component/image-component';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-carousel-component',
  imports: [ButtonComponent, CarouselModule, CommonModule, ImageComponent],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  // Number of items per page.
  @Input() numVisible: number = 1;
  // Number of items to scroll.
  @Input() numScroll: number = 1;
  // Defines if scrolling would be infinite.
  @Input() circular: boolean = false;
  // Time in milliseconds to scroll items automatically.
  @Input() autoplayInterval: number = 0;

  // An array of objects to display.
  value: any[] = [];
  productImage: Record<string, number> = {};
  productListImageBegin: Record<string, number> = {};
  productImageMax: number = 5;

  @Input() set products(currentProducts: any[] | undefined) {
    this.value = currentProducts ?? [];
    this.productImage = {};

    for (const product of this.value) {
      this.productImage[product.id] = 0;
      this.productListImageBegin[product.id] = 0;
    }
  }

  PrimeIcons = PrimeIcons;

  getThumbnail(src: string): string {
    return src.replace('/upload/', '/upload/w_100,h_100,c_fill,q_auto,f_auto/');
  }

  getProductImages(product: any) {
    const begin = this.productListImageBegin[product.id];

    return product.images.slice(begin, begin + this.productImageMax).map((src: any, i: number) => ({
      src,
      index: begin + i,
    }));
  }

  updateProductListImageBegin(product: any) {
    const index = this.productImage[product.id];
    const count = product.images.length;
    const max = this.productImageMax;

    this.productListImageBegin[product.id] =
      count <= max ? 0 : Math.max(0, Math.min(index - Math.floor(max / 2), count - max));
  }

  onImageChanged(product: any, index: number) {
    this.productImage[product.id] = index;
    this.updateProductListImageBegin(product);
  }

  onPreviousButtonPressed(product: any) {
    const index = this.productImage[product.id];

    if (index > 0) {
      this.productImage[product.id] = index - 1;
      this.updateProductListImageBegin(product);
    }
  }

  onNextButtonPressed(product: any) {
    const index = this.productImage[product.id];

    if (index < product.images.length - 1) {
      this.productImage[product.id] = index + 1;
      this.updateProductListImageBegin(product);
    }
  }
}
