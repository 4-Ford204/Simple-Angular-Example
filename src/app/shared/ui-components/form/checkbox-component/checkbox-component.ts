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
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
