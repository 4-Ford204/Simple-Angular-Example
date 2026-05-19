import { Component, Input } from '@angular/core';

import { Timeline } from 'primeng/timeline';

@Component({
  selector: 'app-timeline-component',
  imports: [Timeline],
  templateUrl: './timeline-component.html',
  styleUrl: './timeline-component.css',
})
export class TimelineComponent {
  // An array of events to display.
  @Input() value: any[] = [];
  // Position of timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
  @Input() align: string = 'left';
  // Orientation of the timeline.
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
}
