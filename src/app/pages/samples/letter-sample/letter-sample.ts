import { Component } from '@angular/core';
import { LetterComponent } from '../../../shared/utility-components/letter-component/letter-component';

@Component({
  selector: 'app-letter-sample',
  imports: [LetterComponent],
  templateUrl: './letter-sample.html',
  styleUrl: './letter-sample.css',
})
export class LetterSample {}
