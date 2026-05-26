import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doughnut-chart-component',
  imports: [ChartModule],
  templateUrl: './doughnut-chart-component.html',
  styleUrl: './doughnut-chart-component.css',
})
export class DoughnutChartComponent implements OnInit, OnDestroy {
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
        this.initDoughnutChart();
        this.cd.markForCheck();
      }
    });

    this.initDoughnutChart();

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  initDoughnutChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    this.options = {
      cutout: '60%',
      plugins: {
        legend: { labels: { color: textColor } },
      },
    };
  }
}
