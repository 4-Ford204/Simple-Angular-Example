import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../button-component/button-component';
import { CarouselModule } from 'primeng/carousel';
import { ImageComponent } from '../image-component/image-component';

@Component({
  selector: 'app-carousel-component',
  imports: [ButtonComponent, CarouselModule, ImageComponent],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent {
  // Number of items per page.
  @Input() numVisible: number = 1;
  // Number of items to scroll.
  @Input() numScroll: number = 1;
  // An array of objects to display.
  @Input() value: any[] = [];
  // Defines if scrolling would be infinite.
  @Input() circular: boolean = false;
}
