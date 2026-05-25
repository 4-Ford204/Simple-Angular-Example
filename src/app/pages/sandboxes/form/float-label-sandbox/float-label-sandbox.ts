import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FloatLabelComponent } from '../../../../shared/ui-components/form/float-label-component/float-label-component';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-float-label-sandbox',
  imports: [CommonModule, FloatLabelComponent, Sandbox],
  templateUrl: './float-label-sandbox.html',
  styleUrl: './float-label-sandbox.css',
})
export class FloatLabelSandbox {
  username: string = '';

  onTextChanged(event: any) {
    console.log('Text changed:', this.username);
  }
}
