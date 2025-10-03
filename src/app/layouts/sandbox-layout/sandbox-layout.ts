import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../common/sidebar/sidebar';

@Component({
  selector: 'app-sandbox-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './sandbox-layout.html',
  styleUrl: './sandbox-layout.css',
})
export class SandboxLayout {}
