import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';

import { BarChartComponent } from '../../../shared/ui-components/chart/bar-chart-component/bar-chart-component';
import { PieChartComponent } from '../../../shared/ui-components/chart/pie-chart-component/pie-chart-component';
import { Sandbox } from '../sandboxes';

@Component({
  selector: 'app-chart-sandbox',
  imports: [CommonModule, BarChartComponent, PieChartComponent, Sandbox],
  templateUrl: './chart-sandbox.html',
  styleUrl: './chart-sandbox.css',
})
export class ChartSandbox implements OnInit {
  barChartData: any;
  pieChartData: any;

  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.initBarChart();
    this.initPieChart();
  }

  initBarChart() {
    if (isPlatformBrowser(this.platformId)) {
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
    }
  }

  initPieChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
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
    }
  }
}
