import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuComponent } from '../../../shared/ui-components/panel-menu-component/panel-menu-component';
import { Router } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuComponent, ScrollPanelModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  items: MenuItem[] = [
    {
      label: 'Button',
      icon: 'pi pi-circle',
      command: () => {
        this.router.navigate(['/sandbox/button-sandbox']);
      },
    },
    {
      label: 'Checkbox',
      icon: 'pi pi-check-square',
      command: () => {
        this.router.navigate(['/sandbox/checkbox-sandbox']);
      },
    },
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

  constructor(private readonly router: Router) {}
}
