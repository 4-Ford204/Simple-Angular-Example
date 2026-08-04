import { ButtonComponent } from '../../../shared/ui-components/button-component/button-component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { Sandbox } from '../sandboxes';

@Component({
  selector: 'app-button-sandbox',
  imports: [ButtonComponent, CommonModule, Sandbox],
  templateUrl: './button-sandbox.html',
  styleUrl: './button-sandbox.css',
})
export class ButtonSandbox {
  loading: boolean = false;

  PrimeIcons = PrimeIcons;

  onButtonLoading() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  onButtonPressed() {
    console.log('Button pressed');
  }
}
