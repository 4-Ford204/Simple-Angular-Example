import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto-complete-component',
  imports: [AutoCompleteModule, FormsModule],
  templateUrl: './auto-complete-component.html',
  styleUrl: './auto-complete-component.css',
})
export class AutoCompleteComponent {
  // Displays a button next to the input field when enabled.
  @Input() dropdown: boolean = false;
  // An array of suggestions to display.
  @Input() suggestions: any[] = [];
  // Property name or getter function to use as label of an option.
  @Input() optionLabel: string | ((item: any) => string) | undefined = undefined;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueCompleted = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueCompleted(event: any) {
    this.valueCompleted.emit(event);
  }

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
