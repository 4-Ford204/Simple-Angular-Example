import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageComponent } from '../../../../shared/ui-components/messages/message-component/message-component';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-message-sandbox',
  imports: [CommonModule, MessageComponent, Sandbox],
  templateUrl: './message-sandbox.html',
  styleUrl: './message-sandbox.css',
})
export class MessageSandbox {}
