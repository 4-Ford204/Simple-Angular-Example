import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatePickerComponent } from '../../../../shared/ui-components/form/date-picker-component/date-picker-component';
import { PrimeIcons } from 'primeng/api';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-date-picker-sandbox',
  imports: [CommonModule, DatePickerComponent, Sandbox],
  templateUrl: './date-picker-sandbox.html',
  styleUrl: './date-picker-sandbox.css',
})
export class DatePickerSandbox {
  date: string = '';
  time: string = '';

  PrimeIcons = PrimeIcons;
}
