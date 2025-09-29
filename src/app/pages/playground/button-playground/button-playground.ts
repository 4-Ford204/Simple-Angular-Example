import { Component } from '@angular/core';
import { Button } from '../../../shared/ui-components/button/button';

@Component({
  selector: 'app-button-playground',
  imports: [Button],
  templateUrl: './button-playground.html',
  styleUrl: './button-playground.css',
})
export class ButtonPlayground {
  onButtonClick() {
    console.log('Button clicked!');
  }
}
