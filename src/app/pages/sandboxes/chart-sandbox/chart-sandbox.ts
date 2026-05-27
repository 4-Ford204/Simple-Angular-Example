import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { ChartComponent } from '../../../shared/ui-components/chart-component/chart-component';
import { Sandbox } from '../sandboxes';

@Component({
  selector: 'app-chart-sandbox',
  imports: [CommonModule, ChartComponent, Sandbox],
  templateUrl: './chart-sandbox.html',
  styleUrl: './chart-sandbox.css',
})
export class ChartSandbox implements OnInit, OnDestroy {
  barChartData: any;
  barChartOption: any;

  pieChartData: any;
  pieChartOption: any;

  doughnutChartData: any;
  doughnutChartOption: any;

  verticalBarChartData: any;
  verticalBarChartOption: any;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly cd = inject(ChangeDetectorRef);
  private observer!: MutationObserver;
  private readonly theme = {
    Text: '',
    TextMuted: '',
    ContentBorder: '',
    Cyan500: '',
    Orange500: '',
    Gray500: '',
    Cyan400: '',
    Orange400: '',
    Gray400: '',
  };

  ngOnInit(): void {
    this.observer = new MutationObserver(() => {
      this.initChart();
      this.cd.markForCheck();
    });

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    this.initChart();
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  initChart() {
    this.initTheme();
    this.initBarChart();
    this.initPieChart();
    this.initDoughnutChart();
    this.initVerticalBarChart();
  }

  initTheme() {
    const style = getComputedStyle(document.documentElement);
    this.theme.Text = style.getPropertyValue('--p-text-color');
    this.theme.TextMuted = style.getPropertyValue('--p-text-muted-color');
    this.theme.ContentBorder = style.getPropertyValue('--p-content-border-color');
    this.theme.Cyan500 = style.getPropertyValue('--p-cyan-500');
    this.theme.Orange500 = style.getPropertyValue('--p-orange-500');
    this.theme.Gray500 = style.getPropertyValue('--p-gray-500');
    this.theme.Cyan400 = style.getPropertyValue('--p-cyan-400');
    this.theme.Orange400 = style.getPropertyValue('--p-orange-400');
    this.theme.Gray400 = style.getPropertyValue('--p-gray-400');
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

      this.barChartOption = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: this.theme.Text } },
        },
        scales: {
          x: {
            ticks: { color: this.theme.TextMuted },
            grid: { color: this.theme.ContentBorder },
          },
          y: {
            beginAtZero: true,
            ticks: { color: this.theme.TextMuted },
            grid: { color: this.theme.ContentBorder },
          },
        },
      };
    }
  }

  initPieChart() {
    if (isPlatformBrowser(this.platformId)) {
      this.pieChartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [540, 325, 702],
            backgroundColor: [this.theme.Cyan500, this.theme.Orange500, this.theme.Gray500],
            hoverBackgroundColor: [this.theme.Cyan400, this.theme.Orange400, this.theme.Gray400],
          },
        ],
      };

      this.pieChartOption = {
        plugins: {
          legend: {
            labels: { usePointStyle: true, color: this.theme.Text },
          },
        },
      };
    }
  }

  initDoughnutChart() {
    if (isPlatformBrowser(this.platformId)) {
      this.doughnutChartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [this.theme.Cyan500, this.theme.Orange500, this.theme.Gray500],
            hoverBackgroundColor: [this.theme.Cyan400, this.theme.Orange400, this.theme.Gray400],
          },
        ],
      };

      this.doughnutChartOption = {
        cutout: '60%',
        plugins: {
          legend: { labels: { color: this.theme.Text } },
        },
      };
    }
  }

  initVerticalBarChart() {
    if (isPlatformBrowser(this.platformId)) {
      this.verticalBarChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: this.theme.Cyan500,
            borderColor: this.theme.Cyan500,
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: 'My Second dataset',
            backgroundColor: this.theme.Gray500,
            borderColor: this.theme.Gray500,
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      };

      this.verticalBarChartOption = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: { labels: { color: this.theme.Text } },
        },
        scales: {
          x: {
            ticks: {
              color: this.theme.TextMuted,
              font: { weight: 500 },
            },
            grid: {
              color: this.theme.ContentBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: { color: this.theme.TextMuted },
            grid: {
              color: this.theme.ContentBorder,
              drawBorder: false,
            },
          },
        },
      };
    }
  }
}
