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
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() severity:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warn'
    | 'help'
    | 'danger'
    | 'contrast' = 'primary';
  @Input() disabled: boolean = false;
  @Input() raised: boolean = false;
  @Input() rounded: boolean = false;
  @Input() variant: 'text' | 'outlined' | undefined = undefined;
  @Input() badge: string | undefined = undefined;
  @Input() size: 'small' | 'large' | undefined = undefined;

  @Output() pressed = new EventEmitter();

  onPress() {
    this.pressed.emit();
  }
}
