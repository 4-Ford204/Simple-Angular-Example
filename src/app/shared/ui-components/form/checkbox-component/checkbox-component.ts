import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-component',
  imports: [CheckboxModule, FormsModule],
  templateUrl: './checkbox-component.html',
  styleUrl: './checkbox-component.css',
})
export class CheckboxComponent {
  // When present, it specifies that the component should have invalid state style.
  @Input() invalid: boolean = false;
  // When present, it specifies that the component should have disabled state style.
  @Input() disabled: boolean = false;
  // When present, it specifies the name of the input element.
  @Input() name: string = '';
  // Value of the checkbox.
  @Input() value: any = null;
  // Allows to select a boolean value instead of multiple values.
  @Input() binary: boolean = false;
  // Identifier of the focus input to match a label defined for the component.
  @Input() inputId: string | undefined = undefined;
  // When present, it specifies input state as indeterminate.
  @Input() indeterminate: boolean = false;
  // Specifies the input variant of the component.
  @Input() variant: 'filled' | 'outlined' | undefined = undefined;
  // Specifies the size of the component.
  @Input() size: 'small' | 'large' | undefined = undefined;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
