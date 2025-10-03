import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() severity:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warn'
    | 'help'
    | 'danger'
    | null = null;
  @Input() outlined: boolean = false;
  @Input() text: boolean = false;
  @Input() raised: boolean = false;
  @Input() rounded: boolean = false;
  @Input() size: 'small' | 'large' | undefined = undefined;

  @Output() pressed = new EventEmitter();

  onPress() {
    this.pressed.emit();
  }
}
