import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-multi-select-component',
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './multi-select-component.html',
  styleUrl: './multi-select-component.css',
})
export class MultiSelectComponent {
  // When present, it specifies that the component should have invalid state style.
  @Input() invalid: boolean = false;
  // When present, it specifies that the component should have disabled state style.
  @Input() disabled: boolean = false;
  // When specified, displays an input field to filter the items on keyup.
  @Input() filter: boolean = true;
  // Decides how many selected item labels to show at most.
  @Input() maxSelectedLabels: number | null | undefined = undefined;
  // Name of the label field of an option.
  @Input() optionLabel: string | undefined = undefined;
  // Whether the multiselect is in loading state
  @Input() loading: boolean = false;
  // Defines how the selected items are displayed.
  @Input() display: string = 'comma';
  // When enabled, a clear icon is displayed to clear the value.
  @Input() showClear: boolean = false;
  // Label to display when there are no selections.
  @Input() placeholder: string | undefined = undefined;
  // An array of objects to display as the available options.
  @Input() options: any[] | undefined = undefined;
  // Specifies the size of the component.
  @Input() size: 'small' | 'large' | undefined = undefined;
  // Specifies the input variant of the component.
  @Input() variant: 'filled' | 'outlined' | undefined = undefined;
  // Spans 100% width of the container when enabled.
  @Input() fluid: boolean | undefined = undefined;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged($event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
