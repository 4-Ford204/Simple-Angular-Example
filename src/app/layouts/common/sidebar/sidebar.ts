import { MenuItem, PrimeIcons } from 'primeng/api';

import { APP_ROUTES } from '../../../database/route';
import { Component } from '@angular/core';
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
        this.router.navigateByUrl(APP_ROUTES.BUTTON_SANDBOX);
      },
      tooltipOptions: new TooltipOptions({ tooltipLabel: 'Button' }),
    },
    {
      label: 'Chart',
      icon: PrimeIcons.CHART_BAR,
      command: () => {
        this.router.navigateByUrl(APP_ROUTES.CHART_SANDBOX);
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
            this.router.navigateByUrl(APP_ROUTES.TIMELINE_SANDBOX);
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
            this.router.navigateByUrl(APP_ROUTES.AUTO_COMPLETE_SANDBOX);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Auto Complete' }),
        },
        {
          label: 'Checkbox',
          icon: PrimeIcons.CHECK_CIRCLE,
          command: () => {
            this.router.navigateByUrl(APP_ROUTES.CHECKBOX_SANDBOX);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Checkbox' }),
        },
        {
          label: 'Float Label',
          command: () => {
            this.router.navigateByUrl(APP_ROUTES.FLOAT_LABEL_SANDBOX);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Float Label' }),
        },
        {
          label: 'Multi Select',
          icon: PrimeIcons.CHECK_SQUARE,
          command: () => {
            this.router.navigateByUrl(APP_ROUTES.MULTI_SELECT_SANDBOX);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Multi Select' }),
        },
        {
          label: 'Toggle Switch',
          icon: PrimeIcons.TWITCH,
          command: () => {
            this.router.navigateByUrl(APP_ROUTES.TOGGLE_SWITCH_SANDBOX);
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
            this.router.navigateByUrl(APP_ROUTES.MESSAGE_SANDBOX);
          },
          tooltipOptions: new TooltipOptions({ tooltipLabel: 'Message' }),
        },
        {
          label: 'Toast',
          icon: PrimeIcons.WHATSAPP,
          command: () => {
            this.router.navigateByUrl(APP_ROUTES.TOAST_SANDBOX);
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
            this.router.navigateByUrl(APP_ROUTES.TOOLTIP_SANDBOX);
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
