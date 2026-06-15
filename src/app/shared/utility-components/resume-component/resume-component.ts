import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../ui-components/media/image-component/image-component';

@Component({
  selector: 'app-resume-component',
  imports: [CommonModule, ImageComponent],
  templateUrl: './resume-component.html',
  styleUrl: './resume-component.css',
})
export class ResumeComponent {
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() position: string | undefined;
  @Input() description: string | undefined;
  @Input() technologies: string[] | undefined;
}
