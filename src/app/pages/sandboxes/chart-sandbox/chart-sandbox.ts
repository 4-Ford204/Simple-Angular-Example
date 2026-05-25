import { ChangeDetectorRef, Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { ChartComponent } from '../../../shared/ui-components/chart-component/chart-component';
import { Sandbox } from '../sandboxes';

@Component({
  selector: 'app-chart-sandbox',
  imports: [ChartComponent, CommonModule, Sandbox],
  templateUrl: './chart-sandbox.html',
  styleUrl: './chart-sandbox.css',
})
export class ChartSandbox implements OnInit {
  barChartData: any;
  barChartOptions: any;

  pieChartData: any;
  pieChartOptions: any;

  platformId = inject(PLATFORM_ID);

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initBarChart();
    this.initPieChart();
  }

  initBarChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.barChartData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: [
              'rgba(249, 115, 22, 0.2)',
              'rgba(6, 182, 212, 0.2)',
              'rgb(107, 114, 128, 0.2)',
              'rgba(139, 92, 246, 0.2)',
            ],
            borderColor: [
              'rgb(249, 115, 22)',
              'rgb(6, 182, 212)',
              'rgb(107, 114, 128)',
              'rgb(139, 92, 246)',
            ],
            borderWidth: 1,
          },
        ],
      };

      this.barChartOptions = {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };

      this.cd.markForCheck();
    }
  }

  initPieChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.pieChartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [540, 325, 702],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-500'),
              documentStyle.getPropertyValue('--p-orange-500'),
              documentStyle.getPropertyValue('--p-gray-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-400'),
              documentStyle.getPropertyValue('--p-orange-400'),
              documentStyle.getPropertyValue('--p-gray-400'),
            ],
          },
        ],
      };

      this.pieChartOptions = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor,
            },
          },
        },
      };

      this.cd.markForCheck();
    }
  }
}
