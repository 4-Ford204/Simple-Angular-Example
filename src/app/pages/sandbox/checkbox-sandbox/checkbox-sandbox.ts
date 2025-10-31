import { Component, OnInit } from '@angular/core';

import { CheckboxComponent } from '../../../shared/ui-components/form/checkbox-component/checkbox-component';
import { CommonModule } from '@angular/common';
import { Sandbox } from '../sandbox';

@Component({
  selector: 'app-checkbox-sandbox',
  imports: [CheckboxComponent, CommonModule, Sandbox],
  templateUrl: './checkbox-sandbox.html',
  styleUrl: './checkbox-sandbox.css',
})
export class CheckboxSandbox implements OnInit {
  checked: boolean = false;
  pizza: string[] = [];
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];
  selectedCategories: any[] = [];

  ngOnInit(): void {
    this.selectedCategories = [this.categories[1]];
  }

  onValueChanged(event: any) {
    console.log('Pizza changed:', this.pizza);
    console.log('Categories changed:', this.selectedCategories);
  }
}
