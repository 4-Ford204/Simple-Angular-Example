import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-envelope-component',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './envelope-component.html',
  styleUrl: './envelope-component.css',
})
export class EnvelopeComponent {
  opened: boolean = false;
  hearts: { position: number; size: number; duration: number }[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.hearts.push({
        position: Math.random() * 50 + 10,
        size: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 5 + 5,
      });
    }
  }

  onEnvelopeToggled() {
    this.opened = !this.opened;
  }
}
