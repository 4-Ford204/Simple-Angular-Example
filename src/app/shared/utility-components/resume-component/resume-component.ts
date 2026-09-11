import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../ui-components/media/image-component/image-component';
import { PrimeIcons } from 'primeng/api';

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
  @Input() mail: string | undefined;
  @Input() phone: string | undefined;
  @Input() birthday: string | undefined;
  @Input() address: string | undefined;
  @Input() description: string | undefined;
  @Input() technologies: any[] | undefined;

  PrimeIcons = PrimeIcons;
}
