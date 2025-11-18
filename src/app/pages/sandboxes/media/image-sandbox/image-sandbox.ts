import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from '../../../../shared/ui-components/media/image-component/image-component';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-image-sandbox',
  imports: [CommonModule, ImageComponent, Sandbox],
  templateUrl: './image-sandbox.html',
  styleUrl: './image-sandbox.css',
})
export class ImageSandbox {}
