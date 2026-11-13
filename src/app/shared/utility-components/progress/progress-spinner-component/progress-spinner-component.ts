import { Component, Input } from '@angular/core';

import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-progress-spinner-component',
  imports: [ProgressSpinner],
  templateUrl: './progress-spinner-component.html',
  styleUrl: './progress-spinner-component.css',
})
export class ProgressSpinnerComponent {
  // Width of the circle stroke.
  @Input() strokeWidth: string = '2';
  // Color for the background of the circle.
  @Input() fill: string = 'none';
  // Duration of the rotate animation.
  @Input() animationDuration: string = '2s';
  // Used to define a aria label attribute the current element.
  @Input() ariaLabel: string | undefined = undefined;
  @Input() style: any = {};
}
