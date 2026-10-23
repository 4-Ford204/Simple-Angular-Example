import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FloatLabelInputComponent } from '../../../../shared/ui-components/form/float-label/float-label-input-component/float-label-input-component';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-float-label-sandbox',
  imports: [CommonModule, FloatLabelInputComponent, Sandbox],
  templateUrl: './float-label-sandbox.html',
  styleUrl: './float-label-sandbox.css',
})
export class FloatLabelSandbox {
  username: string = '';

  onTextChanged(event: any) {
    console.log('Text changed:', this.username);
  }
}
