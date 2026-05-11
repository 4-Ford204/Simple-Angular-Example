import { Component, Input } from '@angular/core';

import { Image } from 'primeng/image';

@Component({
  selector: 'app-image-component',
  imports: [Image],
  templateUrl: './image-component.html',
  styleUrl: './image-component.css',
})
export class ImageComponent {
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
}
