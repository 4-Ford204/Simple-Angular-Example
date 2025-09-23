import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../common/header/header';

@Component({
  selector: 'app-playground-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './playground-layout.html',
  styleUrl: './playground-layout.css',
})
export class PlaygroundLayout {}
