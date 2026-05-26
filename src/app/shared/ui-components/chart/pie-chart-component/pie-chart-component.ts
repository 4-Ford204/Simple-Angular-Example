import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-pie-chart-component',
  imports: [ChartModule],
  templateUrl: './pie-chart-component.html',
  styleUrl: './pie-chart-component.css',
})
export class PieChartComponent implements OnInit, OnDestroy {
  // Data to display.
  @Input() data: any;
  // Options to customize the chart.
  @Input() options: any;

  private readonly cd = inject(ChangeDetectorRef);
  private customOptions = false;
  private observer!: MutationObserver;

  ngOnInit() {
    if (this.options) this.customOptions = true;

    this.observer = new MutationObserver(() => {
      if (!this.customOptions) {
        this.initPieChart();
        this.cd.markForCheck();
      }
    });

    this.initPieChart();

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  initPieChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    this.options = {
      plugins: {
        legend: {
          labels: { usePointStyle: true, color: textColor },
        },
      },
    };
  }
}
