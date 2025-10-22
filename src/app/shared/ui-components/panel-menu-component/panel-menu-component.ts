import { Component, Input } from '@angular/core';

import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-panel-menu-component',
  imports: [BadgeModule, PanelMenu, Ripple],
  templateUrl: './panel-menu-component.html',
  styleUrl: './panel-menu-component.css',
})
export class PanelMenuComponent {
  @Input() items: MenuItem[] = [];
}
