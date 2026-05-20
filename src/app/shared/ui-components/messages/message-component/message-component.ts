import { Component, Input } from '@angular/core';

import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-message-component',
  imports: [MessageModule],
  templateUrl: './message-component.html',
  styleUrl: './message-component.css',
})
export class MessageComponent {
  // Severity level of the message.
  @Input() severity: 'success' | 'info' | 'warn' | 'secondary' | 'contrast' | 'error' = 'info';
  // Icon to display in the message.
  @Input() icon: string = '';
  // Defines the size of the component.
  @Input() size: 'small' | 'large' | undefined = undefined;
  // Specifies the input variant of the component.
  @Input() variant: 'text' | 'outlined' | 'simple' | undefined = undefined;
  @Input() text: string = '';
}
