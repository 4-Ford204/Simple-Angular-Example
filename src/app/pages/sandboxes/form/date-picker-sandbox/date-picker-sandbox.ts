import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DatePickerComponent } from '../../../../shared/ui-components/form/date-picker-component/date-picker-component';
import { PrimeIcons } from 'primeng/api';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-date-picker-sandbox',
  imports: [CommonModule, DatePickerComponent, Sandbox],
  templateUrl: './date-picker-sandbox.html',
  styleUrl: './date-picker-sandbox.css',
})
export class DatePickerSandbox implements OnInit {
  date: Date | undefined;
  time: Date | undefined;
  dates: Date[] | undefined;
  times: Date[] | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined;

  PrimeIcons = PrimeIcons;

  ngOnInit(): void {
    const today = new Date();
    this.minDate = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-10`);
    this.maxDate = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-20`);
  }
}
