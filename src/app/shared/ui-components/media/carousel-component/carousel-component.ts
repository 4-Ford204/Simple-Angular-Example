import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonComponent } from '../../button-component/button-component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image-component/image-component';

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
  productImages: Record<string, number> = {};

  @Input() set products(currentProducts: any[] | null) {
    this.value = currentProducts ?? [];
    this.productImages = {};

    for (const product of this.value) {
      this.productImages[product.id] = 0;
    }
  }

  getThumbnail(src: string): string {
    return src.replace('/upload/', '/upload/w_100,h_100,c_fill,q_auto,f_auto/');
  }

  onImageChanged(id: string, index: number) {
    this.productImages[id] = index;
  }
}
