import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sandbox } from '../../sandboxes';
import { TimelineComponent } from '../../../../shared/ui-components/data/timeline-component/timeline-component';

@Component({
  selector: 'app-timeline-sandbox',
  imports: [CommonModule, Sandbox, TimelineComponent],
  templateUrl: './timeline-sandbox.html',
  styleUrl: './timeline-sandbox.css',
})
export class TimelineSandbox {
  events: any[] = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
  ];
}
