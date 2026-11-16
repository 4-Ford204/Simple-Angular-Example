import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { ImageModule } from 'primeng/image';
import { PrimeIcons } from 'primeng/api';
import { ProgressSpinnerComponent } from '../../../utility-components/progress/progress-spinner-component/progress-spinner-component';

@Component({
  selector: 'app-image-component',
  imports: [ImageModule, ProgressSpinnerComponent],
  templateUrl: './image-component.html',
  styleUrl: './image-component.css',
})
export class ImageComponent implements OnChanges {
  // Style class of the image element.
  @Input() imageClass: string | undefined = undefined;
  // The source path for the main image.
  @Input() src: string | undefined = undefined;
  // Attribute of the preview image element.
  @Input() alt: string | undefined = undefined;
  // Attribute of the image element.
  @Input() width: string | undefined = undefined;
  // Attribute of the image element.
  @Input() height: string | undefined = undefined;
  // Attribute of the image element.
  @Input() loading: 'eager' | 'lazy' | undefined = undefined;
  // Controls the preview functionality.
  @Input() preview: boolean = false;
  // Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
  @Input() appendTo: string = 'self';
  @Input() decoding: 'async' | 'sync' | 'auto' = 'auto';

  loaded = false;

  PrimeIcons = PrimeIcons;

  @Output() imageLoad = new EventEmitter<any>();
  @Output() imageError = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.loaded = false;
    }
  }

  onImageLoaded(event: any) {
    this.loaded = true;
    this.imageLoad.emit(event);
  }
}
