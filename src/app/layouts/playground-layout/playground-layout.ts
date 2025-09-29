import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../common/sidebar/sidebar';

@Component({
  selector: 'app-playground-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './playground-layout.html',
  styleUrl: './playground-layout.css',
})
export class PlaygroundLayout {}
