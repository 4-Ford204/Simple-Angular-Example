import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sandbox } from '../../sandboxes';
import { TimelineComponent } from '../../../../shared/ui-components/data/timeline-component/timeline-component';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-timeline-sandbox',
  imports: [CommonModule, Sandbox, TimelineComponent],
  templateUrl: './timeline-sandbox.html',
  styleUrl: './timeline-sandbox.css',
})
export class TimelineSandbox {
  birthdays: any[] = [
    { status: 'Big', date: '30/07' },
    { status: 'Nô', date: '16/09/2003' },
    { status: 'Mẹ', date: '20/11/1974' },
  ];
  events: any[] = [
    {
      status: 'Ordered',
      date: '15/10/2020 10:30',
      icon: PrimeIcons.SHOPPING_CART,
      color: '#9C27B0',
    },
    { status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7' },
    {
      status: 'Shipped',
      date: '15/10/2020 16:15',
      icon: PrimeIcons.SHOPPING_CART,
      color: '#FF9800',
    },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B' },
  ];
}
