import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { Sandbox } from '../../sandboxes';
import { TimelineComponent } from '../../../../shared/ui-components/data/timeline-component/timeline-component';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-timeline-sandbox',
  imports: [CommonModule, Sandbox, TimelineComponent],
  templateUrl: './timeline-sandbox.html',
  styleUrl: './timeline-sandbox.css',
})
export class TimelineSandbox implements OnInit {
  users: any[] = [
    { status: 'January', date: '01-00', icon: 'fa-solid fa-aquarius', color: '#42A5F5' },
    { status: 'February', date: '02-00', icon: 'fa-solid fa-pisces', color: '#AB47BC' },
    { status: 'March', date: '03-00', icon: 'fa-solid fa-aries', color: '#EF5350' },
    { status: 'April', date: '04-00', icon: 'fa-solid fa-taurus', color: '#66BB6A' },
    { status: 'May', date: '05-00', icon: 'fa-solid fa-gemini', color: '#FBC02D' },
    { status: 'June', date: '06-00', icon: 'fa-solid fa-cancer', color: '#26A69A' },
    { status: 'July', date: '07-00', icon: 'fa-solid fa-leo', color: '#FF9800' },
    { status: 'August', date: '08-00', icon: 'fa-solid fa-virgo', color: '#9CCC65' },
    { status: 'September', date: '09-00', icon: 'fa-solid fa-libra', color: '#EC407A' },
    { status: 'October', date: '10-00', icon: 'fa-solid fa-scorpio', color: '#8E24AA' },
    { status: 'November', date: '11-00', icon: 'fa-solid fa-sagittarius', color: '#29B6F6' },
    { status: 'December', date: '12-00', icon: 'fa-solid fa-capricorn', color: '#607D8B' },
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

  private readonly userService = inject(UserService);

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().then((response: any) => {
      const users = [
        ...this.users,
        ...response.data.map((u: any) => {
          const [day, month] = u.birthday.split(/[-/]/);
          return {
            status: u.name,
            date: `${month}-${day}`,
          };
        }),
      ];

      const groupedUsers = Object.values(
        users.reduce((grouped: any, user: any) => {
          if (!grouped[user.date]) {
            grouped[user.date] = { ...user, status: user.status };
          } else {
            grouped[user.date].status += `<br>${user.status}`;
          }

          return grouped;
        }, {})
      );

      this.users = groupedUsers.sort((a: any, b: any) => a.date.localeCompare(b.date));
    });
  }
}
