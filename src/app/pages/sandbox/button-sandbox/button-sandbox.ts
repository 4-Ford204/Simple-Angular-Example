import { Component } from '@angular/core';
import { Button } from '../../../shared/ui-components/button/button';

@Component({
  selector: 'app-button-sandbox',
  imports: [Button],
  templateUrl: './button-sandbox.html',
  styleUrl: './button-sandbox.css',
})
export class ButtonSandbox {
  onPressed() {
    console.log('Button pressed');
  }
}
