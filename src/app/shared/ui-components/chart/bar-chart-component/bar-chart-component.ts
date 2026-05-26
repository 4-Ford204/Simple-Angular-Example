import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-bar-chart-component',
  imports: [ChartModule],
  templateUrl: './bar-chart-component.html',
  styleUrl: './bar-chart-component.css',
})
export class BarChartComponent implements OnInit, OnDestroy {
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
        this.initBarChart();
        this.cd.markForCheck();
      }
    });

    this.initBarChart();

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  initBarChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: textColor } },
      },
      scales: {
        x: {
          ticks: { color: textColorSecondary },
          grid: { color: surfaceBorder },
        },
        y: {
          beginAtZero: true,
          ticks: { color: textColorSecondary },
          grid: { color: surfaceBorder },
        },
      },
    };
  }
}
