import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
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
      icon: PrimeIcons.PLAY_CIRCLE,
      command: () => {
        this.router.navigate(['/sandbox/button-sandbox']);
      },
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Button' }),
    },
    {
      label: 'Chart',
      icon: PrimeIcons.CHART_BAR,
      command: () => {
        this.router.navigate(['/sandbox/chart-sandbox']);
      },
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Chart' }),
    },
    {
      label: 'Data',
      icon: PrimeIcons.DATABASE,
      items: [
        {
          label: 'Timeline',
          icon: PrimeIcons.CHART_LINE,
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
      icon: PrimeIcons.BOOK,
      items: [
        {
          label: 'Auto Complete',
          icon: PrimeIcons.BOLT,
          command: () => {
            this.router.navigate(['/sandbox/form/auto-complete-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Auto Complete' }),
        },
        {
          label: 'Checkbox',
          icon: PrimeIcons.CHECK_CIRCLE,
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
          icon: PrimeIcons.CHECK_SQUARE,
          command: () => {
            this.router.navigate(['/sandbox/form/multi-select-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Multi Select' }),
        },
        {
          label: 'Toggle Switch',
          icon: PrimeIcons.TWITCH,
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
      icon: PrimeIcons.COMMENTS,
      items: [
        {
          label: 'Message',
          icon: PrimeIcons.COMMENT,
          command: () => {
            this.router.navigate(['/sandbox/messages/message-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Message' }),
        },
        {
          label: 'Toast',
          icon: PrimeIcons.WHATSAPP,
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
      icon: PrimeIcons.CLONE,
      items: [
        {
          label: 'Tooltip',
          icon: PrimeIcons.INFO_CIRCLE,
          command: () => {
            this.router.navigate(['/sandbox/overlay/tooltip-sandbox']);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Tooltip' }),
        },
        {
          label: 'Dialog',
          icon: PrimeIcons.WINDOW_MAXIMIZE,
          routerLink: ['sandbox/dialog'],
        },
      ],
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Overlay' }),
    },
    {
      label: 'Card',
      icon: PrimeIcons.ID_CARD,
      items: [
        { label: 'Basic Card', icon: PrimeIcons.FILE, routerLink: ['card-sandbox/basic'] },
        { label: 'Advanced Card', routerLink: ['card-sandbox/advanced'] },
        {
          label: 'Card with Actions',
          routerLink: ['card-sandbox/actions'],
        },
      ],
    },
  ];

  constructor(private readonly router: Router) {}
}
