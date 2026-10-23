import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password-component',
  imports: [FormsModule, PasswordModule],
  templateUrl: './password-component.html',
  styleUrl: './password-component.css',
})
export class PasswordComponent {
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
