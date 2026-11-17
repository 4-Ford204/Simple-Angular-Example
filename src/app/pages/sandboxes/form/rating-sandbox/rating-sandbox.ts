import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RatingComponent } from '../../../../shared/ui-components/form/rating-component/rating-component';
import { Sandbox } from '../../sandboxes';

@Component({
  selector: 'app-rating-sandbox',
  imports: [CommonModule, RatingComponent, Sandbox],
  templateUrl: './rating-sandbox.html',
  styleUrl: './rating-sandbox.css',
})
export class RatingSandbox {
  rate: number = 0;
}
