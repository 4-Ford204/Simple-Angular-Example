import { Component, ViewChild } from '@angular/core';

import { ButtonComponent } from '../../../shared/ui-components/button-component/button-component';
import { CommonModule } from '@angular/common';
import { Sandbox } from '../sandbox';

@Component({
  selector: 'app-button-sandbox',
  imports: [ButtonComponent, CommonModule, Sandbox],
  templateUrl: './button-sandbox.html',
  styleUrl: './button-sandbox.css',
})
export class ButtonSandbox {
  loading: boolean = false;
  @ViewChild(Sandbox) sandbox!: Sandbox;

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
