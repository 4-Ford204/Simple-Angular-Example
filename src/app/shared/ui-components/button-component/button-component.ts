import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-component',
  imports: [ButtonModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  // Position of the icon.
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
  // Name of the icon.
  @Input() icon: string | undefined = undefined;
  // Value of the badge.
  @Input() badge: string | undefined = undefined;
  // Uses to pass attributes to the label's DOM element.
  @Input() label: string | undefined = undefined;
  // When present, it specifies that the component should be disabled.
  @Input() disabled: boolean = false;
  // Whether the button is in loading state.
  @Input() loading: boolean = false;
  // Add the shadow to indicate elevation.
  @Input() raised: boolean = false;
  // Add a circular border radius to the button.
  @Input() rounded: boolean = false;
  // Add a textual class to the button without a background initially.
  @Input() text: boolean = false;
  // Defines the style of the button.
  @Input() severity:
    | 'secondary'
    | 'success'
    | 'info'
    | 'warn'
    | 'help'
    | 'danger'
    | 'contrast'
    | undefined = undefined;
  // Add a border class without a background initially.
  @Input() outlined: boolean = false;
  // Defines the size of the buttons.
  @Input() size: 'small' | 'large' | undefined = undefined;
  // Specifies the variant of the component.
  @Input() variant: 'text' | 'outlined' | undefined = undefined;
  // Class of the element.
  @Input() styleClass: string | undefined = undefined;

  @Output() buttonPressed = new EventEmitter();

  onButtonPressed(event: any) {
    this.buttonPressed.emit();
  }
}
