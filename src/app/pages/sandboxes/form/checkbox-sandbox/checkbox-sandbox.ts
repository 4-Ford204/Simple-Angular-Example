import { Component, afterNextRender, signal } from '@angular/core';

import { CheckboxComponent } from '../../../../shared/ui-components/form/checkbox-component/checkbox-component';
import { CommonModule } from '@angular/common';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-checkbox-sandbox',
  imports: [CheckboxComponent, CommonModule, Sandbox],
  templateUrl: './checkbox-sandbox.html',
  styleUrl: './checkbox-sandbox.css',
})
export class CheckboxSandbox {
  checked = signal(false);
  pizza = signal<string[]>([]);
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];
  selectedCategories = signal<any[]>([]);
  size = signal<any[]>([]);

  constructor() {
    afterNextRender(() => {
      this.selectedCategories.set([this.categories[1]]);
    });
  }

  onValueChanged(event: any) {
    console.log('Pizza changed:', this.pizza());
    console.log('Categories changed:', this.selectedCategories());
    console.log('Size changed:', this.size());
  }
}
