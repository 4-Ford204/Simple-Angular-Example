import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuComponent } from '../../../shared/ui-components/panel-menu-component/panel-menu-component';
import { Router } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipOptions } from '../../../shared/ui-components/overlay/tooltip/tooltip-options';

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
      icon: 'pi pi-play-circle',
      command: () => {
        this.router.navigate(['/sandbox/button-sandbox']);
      },
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Button' }),
    },
    {
      label: 'Form',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Checkbox',
          icon: 'pi pi-check-circle',
          command: () => {
            this.router.navigate(['/sandbox/form/checkbox-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Checkbox' }),
        },
      ],
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Form' }),
    },
    {
      label: 'Overlay',
      icon: 'pi pi-clone',
      items: [
        {
          label: 'Tooltip',
          icon: 'pi pi-info-circle',
          command: () => {
            this.router.navigate(['/sandbox/overlay/tooltip-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Tooltip' }),
        },
        {
          label: 'Dialog',
          icon: 'pi pi-window-maximize',
          routerLink: ['sandbox/dialog'],
        },
      ],
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Overlay' }),
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
