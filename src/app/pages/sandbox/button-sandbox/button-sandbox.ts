import { ButtonComponent } from '../../../shared/ui-components/button-component/button-component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-sandbox',
  imports: [ButtonComponent],
  templateUrl: './button-sandbox.html',
  styleUrl: './button-sandbox.css',
})
export class ButtonSandbox {
  loading: boolean = false;

  onLoading() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  onPressed() {
    console.log('Button pressed');
  }
}
