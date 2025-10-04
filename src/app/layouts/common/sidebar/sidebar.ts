import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, PanelMenuModule, ScrollPanelModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  visible: boolean = true;
  menu: MenuItem[] = [
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
