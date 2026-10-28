import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker-component',
  imports: [DatePickerModule, FormsModule],
  templateUrl: './date-picker-component.html',
  styleUrl: './date-picker-component.css',
})
export class DatePickerComponent {
  @Input() iconDisplay: 'button' | 'input' = 'button';
  // Identifier of the focus input to match a label defined for the component.
  @Input() inputId: string | undefined = undefined;
  // Format of the date which can also be defined at locale settings.
  @Input() dateFormat: string | undefined = undefined;
  // When enabled, displays a button with icon next to input.
  @Input() showIcon: boolean = false;
  // Whether the component should span the full width of its parent.
  @Input() fluid: boolean = false;
  // Icon of the datepicker button.
  @Input() icon: string | undefined = undefined;
  // Whether to display timepicker only.
  @Input() timeOnly: boolean = false;
  // When disabled, datepicker will not be visible with input focus.
  @Input() showOnFocus: boolean = true;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
