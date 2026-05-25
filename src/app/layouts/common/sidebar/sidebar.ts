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
      label: 'Chart',
      icon: 'pi pi-chart-bar',
      command: () => {
        this.router.navigate(['/sandbox/chart-sandbox']);
      },
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Chart' }),
    },
    {
      label: 'Data',
      icon: 'pi pi-database',
      items: [
        {
          label: 'Timeline',
          icon: 'pi pi-chart-line',
          command: () => {
            this.router.navigate(['/sandbox/data/timeline-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Timeline' }),
        },
      ],
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Data' }),
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
        {
          label: 'Float Label',
          command: () => {
            this.router.navigate(['/sandbox/form/float-label-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Float Label' }),
        },
        {
          label: 'Multi Select',
          icon: 'pi pi-check-square',
          command: () => {
            this.router.navigate(['/sandbox/form/multi-select-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Multi Select' }),
        },
        {
          label: 'Toggle Switch',
          icon: 'pi pi-twitch',
          command: () => {
            this.router.navigate(['/sandbox/form/toggle-switch-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Toggle Switch' }),
        },
      ],
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Form' }),
    },
    {
      label: 'Messages',
      icon: 'pi pi-comments',
      items: [
        {
          label: 'Message',
          icon: 'pi pi-comment',
          command: () => {
            this.router.navigate(['/sandbox/messages/message-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Message' }),
        },
        {
          label: 'Toast',
          icon: 'pi pi-whatsapp',
          command: () => {
            this.router.navigate(['/sandbox/messages/toast-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Toast' }),
        },
      ],
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Messages' }),
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
