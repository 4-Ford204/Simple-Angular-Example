import { Component, OnInit } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../../shared/ui-components/media/image-component/image-component';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { RouterLink } from '@angular/router';
import { ToggleSwitchComponent } from '../../../shared/ui-components/form/toggle-switch-component/toggle-switch-component';

@Component({
  selector: 'app-header',
  imports: [
    AvatarModule,
    BadgeModule,
    CommonModule,
    ImageComponent,
    InputTextModule,
    MenubarModule,
    Ripple,
    RouterLink,
    ToggleSwitchComponent,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  checked = true;
  items: MenuItem[] = [
    { label: 'Home', routerLink: ['/'] },
    { label: 'Sandbox', routerLink: ['/sandbox'] },
    {
      label: 'Samples',
      badge: '2',
      items: [
        {
          label: 'Resume',
          icon: 'pi pi-book',
          shortcut: '⌘+R',
          routerLink: ['/samples/resume-sample'],
          target: '_blank',
        },
        { separator: true },
        {
          label: 'Envelope',
          icon: 'pi pi-envelope',
          shortcut: '⌘+S',
          routerLink: ['/samples/letter-sample'],
          target: '_blank',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.onDarkModeChanged();
  }

  onDarkModeChanged() {
    const element = document.querySelector('html');

    if (element) {
      if (this.checked) {
        element.classList.add('dark-mode');
      } else {
        element.classList.remove('dark-mode');
      }
    }
  }
}
