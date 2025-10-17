import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-panel-menu',
  imports: [BadgeModule, PanelMenuModule, Ripple],
  templateUrl: './panel-menu.html',
  styleUrl: './panel-menu.css',
})
export class PanelMenu {
  items: MenuItem[] = [
    { label: 'Button', icon: 'pi pi-circle', routerLink: ['button-sandbox'] },
    { label: 'Checkbox', icon: 'pi pi-check-square', routerLink: ['checkbox-sandbox'] },
    {
      label: 'Card',
      icon: 'pi pi-id-card',
      items: [
        { label: 'Basic Card', icon: 'pi pi-file', routerLink: ['card-sandbox/basic'] },
        { label: 'Advanced Card', icon: 'pi pi-clone', routerLink: ['card-sandbox/advanced'] },
        {
          label: 'Card with Actions',
          icon: 'pi pi-hand-pointer',
          routerLink: ['card-sandbox/actions'],
        },
      ],
    },
  ];
}
