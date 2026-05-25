import { Component, Input } from '@angular/core';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart-component',
  imports: [ChartModule],
  templateUrl: './chart-component.html',
  styleUrl: './chart-component.css',
})
export class ChartComponent {
  // Type of the chart.
  @Input() type:
    | 'line'
    | 'bar'
    | 'scatter'
    | 'bubble'
    | 'pie'
    | 'doughnut'
    | 'polarArea'
    | 'radar'
    | undefined = undefined;
  // Width of the chart.
  @Input() width: string | undefined = undefined;
  // Height of the chart.
  @Input() height: string | undefined = undefined;
  // Whether the chart is redrawn on screen size change.
  @Input() responsive: boolean = true;
  // Data to display.
  @Input() data: any;
  // Options to customize the chart.
  @Input() options: any;
}
