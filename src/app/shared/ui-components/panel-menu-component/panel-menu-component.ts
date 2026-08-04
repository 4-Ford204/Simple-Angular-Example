import { Component, Input } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { PanelMenu } from 'primeng/panelmenu';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-panel-menu-component',
  imports: [BadgeModule, CommonModule, PanelMenu, Ripple],
  templateUrl: './panel-menu-component.html',
  styleUrl: './panel-menu-component.css',
})
export class PanelMenuComponent {
  @Input() items: MenuItem[] = [];

  PrimeIcons = PrimeIcons;
}
