import { Component, Input } from '@angular/core';

import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-progress-bar-component',
  imports: [ProgressBar],
  templateUrl: './progress-bar-component.html',
  styleUrl: './progress-bar-component.css',
})
export class ProgressBarComponent {
  // Current value of the progress.
  @Input() value: number | undefined = undefined;
  // Whether to display the progress bar value.
  @Input() showValue: boolean = true;
  // Defines the mode of the progress
  @Input() mode: string = 'determinate';
  // Color for the background of the progress.
  @Input() color: string | undefined = undefined;
}
