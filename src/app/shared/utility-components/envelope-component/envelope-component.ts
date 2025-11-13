import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-envelope-component',
  imports: [CommonModule],
  templateUrl: './envelope-component.html',
  styleUrl: './envelope-component.css',
})
export class EnvelopeComponent {
  opened: boolean = false;
  hearts: { position: number; size: number; duration: number }[] = [];

  constructor() {
    for (let i = 0; i < 15; i++) {
      this.hearts.push({
        position: Math.random() * 70,
        size: Math.random() * 25 + 25,
        duration: Math.random() * 2.5 + 2.5,
      });
    }
  }

  onEnvelopeToggled() {
    this.opened = !this.opened;
  }
}
