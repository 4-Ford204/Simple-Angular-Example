import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MultiSelectComponent } from '../../../../shared/ui-components/form/multi-select-component/multi-select-component';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-multi-select-sandbox',
  imports: [CommonModule, MultiSelectComponent, Sandbox],
  templateUrl: './multi-select-sandbox.html',
  styleUrl: './multi-select-sandbox.css',
})
export class MultiSelectSandbox {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCities: any[] = [];

  onValueChanged(event: any) {
    console.log(
      'Cities changed:',
      this.selectedCities.map((city) => city.name)
    );
  }
}
