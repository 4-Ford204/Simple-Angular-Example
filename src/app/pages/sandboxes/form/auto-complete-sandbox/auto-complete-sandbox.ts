import { AutoCompleteComponent } from '../../../../shared/ui-components/form/auto-complete-component/auto-complete-component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-auto-complete-sandbox',
  imports: [AutoCompleteComponent, CommonModule, Sandbox],
  templateUrl: './auto-complete-sandbox.html',
  styleUrl: './auto-complete-sandbox.css',
})
export class AutoCompleteSandbox {
  suggestions: any[] = [];
  value: any;

  onValueCompleted(event: any) {
    this.suggestions = event.query
      ? [...new Array(10).keys()].map((item) => `${event.query}-${item}`)
      : [...new Array(10).keys()];
  }
}
