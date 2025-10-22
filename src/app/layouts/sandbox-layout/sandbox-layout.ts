import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../common/sidebar/sidebar';

@Component({
  selector: 'app-sandbox-layout',
  imports: [RouterOutlet, PanelModule, Sidebar],
  templateUrl: './sandbox-layout.html',
  styleUrl: './sandbox-layout.css',
})
export class SandboxLayout {}
