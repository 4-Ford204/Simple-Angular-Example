import { ButtonComponent } from '../../../shared/ui-components/button-component/button-component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-letter-component',
  imports: [ButtonComponent],
  templateUrl: './letter-component.html',
  styleUrl: './letter-component.css',
})
export class LetterComponent {
  opened: boolean = false;

  toggle() {
    this.opened = !this.opened;
  }
}
