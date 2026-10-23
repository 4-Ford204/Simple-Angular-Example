import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from '../../password-component/password-component';

@Component({
  selector: 'app-float-label-password-component',
  imports: [FloatLabelModule, FormsModule, PasswordComponent],
  templateUrl: './float-label-password-component.html',
  styleUrl: './float-label-password-component.css',
})
export class FloatLabelPasswordComponent {
  // Defines the positioning of the label relative to the input.
  @Input() variant: 'in' | 'on' | 'over' = 'over';
  // Whether the component should span the full width of its parent.
  @Input() fluid: boolean = false;
  // Identifier of the accessible input element.
  @Input() inputId: string | undefined = undefined;
  // Whether to show the strength indicator or not.
  @Input() feedback: boolean = true;
  // Whether to show an icon to display the password as plain text.
  @Input() toggleMask: boolean = false;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
