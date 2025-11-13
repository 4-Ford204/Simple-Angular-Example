import { Component } from '@angular/core';
import { EnvelopeComponent } from '../../../shared/utility-components/envelope-component/envelope-component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-envelope-sample',
  imports: [EnvelopeComponent, NgTemplateOutlet],
  templateUrl: './envelope-sample.html',
  styleUrl: './envelope-sample.css',
})
export class EnvelopeSample {}
