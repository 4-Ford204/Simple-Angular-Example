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
  // The value must be greater than or equal to the value.
  @Input() min: number | null | undefined = undefined;
  // The value must be less than or equal to the value.
  @Input() max: number | null | undefined = undefined;
  // Identifier of the focus input to match a label defined for the component.
  @Input() inputId: string | undefined = undefined;
  // Placeholder text for the input.
  @Input() placeholder: string | undefined = undefined;
  // Format of the date which can also be defined at locale settings.
  @Input() dateFormat: string | undefined = undefined;
  // When enabled, displays a button with icon next to input.
  @Input() showIcon: boolean = false;
  // Icon of the datepicker button.
  @Input() icon: string | undefined = undefined;
  // When specified, prevents entering the date manually with keyboard.
  @Input() readonlyInput: boolean = false;
  // Specifies 12 or 24 hour format.
  @Input() hourFormat: string = '';
  // Whether to display timepicker only.
  @Input() timeOnly: boolean = false;
  // When disabled, datepicker will not be visible with input focus.
  @Input() showOnFocus: boolean = true;
  // Whether to display today and clear buttons at the footer.
  @Input() showButtonBar: boolean = false;
  // The minimum selectable date.
  @Input() minDate: Date | null | undefined = null;
  // The maximum selectable date.
  @Input() maxDate: Date | null | undefined = null;
  // Whether to display timepicker.
  @Input() showTime: boolean = false;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
