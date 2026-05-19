import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sandbox } from '../../sandboxes';
import { ToggleSwitchComponent } from '../../../../shared/ui-components/form/toggle-switch-component/toggle-switch-component';

@Component({
  selector: 'app-toggle-switch-sandbox',
  imports: [CommonModule, Sandbox, ToggleSwitchComponent],
  templateUrl: './toggle-switch-sandbox.html',
  styleUrl: './toggle-switch-sandbox.css',
})
export class ToggleSwitchSandbox {}
