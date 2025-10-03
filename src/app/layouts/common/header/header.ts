import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    AvatarModule,
    BadgeModule,
    InputTextModule,
    MenubarModule,
    Ripple,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
    { label: 'Sandbox', routerLink: ['/sandbox'] },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      badge: '3',
      items: [
        { label: 'Core', icon: 'pi pi-bolt', shortcut: '⌘+S' },
        { label: 'Blocks', icon: 'pi pi-server', shortcut: '⌘+B' },
        { separator: true },
        { label: 'UI Kit', icon: 'pi pi-pencil', shortcut: '⌘+U' },
      ],
    },
  ];
}
