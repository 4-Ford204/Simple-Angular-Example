import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';

import { APP_ROUTES } from '../../../database/route';
import { AuthService } from '../../../core/services/auth.service';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../../shared/ui-components/media/image-component/image-component';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { ToggleSwitchComponent } from '../../../shared/ui-components/form/toggle-switch-component/toggle-switch-component';

@Component({
  selector: 'app-header',
  imports: [
    AvatarModule,
    BadgeModule,
    CommonModule,
    ImageComponent,
    InputTextModule,
    MenuModule,
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
          icon: PrimeIcons.BOOK,
          shortcut: '⌘+R',
          routerLink: ['/samples/resume-sample'],
          target: '_blank',
        },
        { separator: true },
        {
          label: 'Envelope',
          icon: PrimeIcons.ENVELOPE,
          shortcut: '⌘+S',
          routerLink: ['/samples/letter-sample'],
          target: '_blank',
        },
      ],
    },
  ];
  avatarMenuItems: MenuItem[] = [
    { label: 'Le Tu Huynh Duy', icon: PrimeIcons.USER, routerLink: ['/administration'] },
    { label: 'Sign Out', icon: PrimeIcons.SIGN_OUT, command: () => this.onSignOutPressed() },
  ];

  PrimeIcons = PrimeIcons;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

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

  onSignOutPressed(): void {
    this.authService.signOut();
    this.router.navigateByUrl(APP_ROUTES.SIGN_IN);
  }
}
