import { ButtonComponent } from '../../../../shared/ui-components/button-component/button-component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Sandbox } from '../../sandboxes';
import { ToastComponent } from '../../../../shared/ui-components/messages/toast-component/toast-component';

@Component({
  selector: 'app-toast-sandbox',
  imports: [ButtonComponent, CommonModule, Sandbox, ToastComponent],
  templateUrl: './toast-sandbox.html',
  styleUrl: './toast-sandbox.css',
  providers: [MessageService],
})
export class ToastSandbox {
  constructor(private readonly messageService: MessageService) {}

  onBasicButtonPressed() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    });
  }

  onSeverityButtonPressed(severity: string, summary: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: 'Message Content' });
  }

  onPositionButtonPressed(severity: string, summary: string, position: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: 'Message Content',
      key: position,
      life: 3000,
    });
  }

  onMultipleButtonPressed() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
      { severity: 'error', summary: 'Message 4', detail: 'Message Content' },
    ]);
  }

  onStickyButtonPressed() {
    this.messageService.add({
      severity: 'info',
      summary: 'Sticky',
      detail: 'Message Content',
      sticky: true,
    });
  }

  onClearButtonPressed() {
    this.messageService.clear();
  }

  onResponsiveButtonPressed() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
      key: 'breakpoints',
    });
  }

  onAnimationButtonPressed() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
      key: 'animation',
    });
  }
}
