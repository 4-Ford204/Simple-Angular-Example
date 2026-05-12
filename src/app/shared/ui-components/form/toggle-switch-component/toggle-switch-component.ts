import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-toggle-switch-component',
  imports: [ToggleSwitchModule, FormsModule],
  templateUrl: './toggle-switch-component.html',
  styleUrl: './toggle-switch-component.css',
})
export class ToggleSwitchComponent {
  // When present, it specifies that the component should have invalid state style.
  @Input() invalid: boolean = false;
  // When present, it specifies that the component should have disabled state style.
  @Input() disabled: boolean = false;
  @Input() model: boolean = false;
}
