import { Component, Input } from '@angular/core';

import { Image } from 'primeng/image';

@Component({
  selector: 'app-image-component',
  imports: [Image],
  templateUrl: './image-component.html',
  styleUrl: './image-component.css',
})
export class ImageComponent {
  // The source path for the main image.
  @Input() src: string | undefined = undefined;
  // Attribute of the preview image element.
  @Input() alt: string | undefined = undefined;
  // Attribute of the image element.
  @Input() width: string | undefined = undefined;
  // Attribute of the image element.
  @Input() height: string | undefined = undefined;
  // Controls the preview functionality.
  @Input() preview: boolean = false;
}
