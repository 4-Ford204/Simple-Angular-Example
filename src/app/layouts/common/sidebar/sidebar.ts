import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MenuItem } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menu: MenuItem[] = [
    { label: 'Button', icon: 'radio_button_checked', route: '/button-playground' },
    { label: 'Card', icon: 'credit_card', route: '/card-playground' },
  ];
}
