import { CheckboxComponent } from '../../../shared/ui-components/form/checkbox-component/checkbox-component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sandbox } from '../sandbox';

@Component({
  selector: 'app-checkbox-sandbox',
  imports: [CheckboxComponent, CommonModule, Sandbox],
  templateUrl: './checkbox-sandbox.html',
  styleUrl: './checkbox-sandbox.css',
})
export class CheckboxSandbox {
  checked: boolean = false;
  pizza: string[] = [];

  onValueChanged(event: any) {
    console.log('Checkbox changed:', this.pizza);
  }
}
