import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rating-component',
  imports: [FormsModule, RatingModule],
  templateUrl: './rating-component.html',
  styleUrl: './rating-component.css',
})
export class RatingComponent {
  // When present, it specifies that the element should be disabled.
  @Input() disabled: boolean = false;
  // When present, changing the value is not possible.
  @Input() readonly: boolean = false;
  // Number of stars.
  @Input() stars: number = 5;
  // Style class of the on icon.
  @Input() iconOnClass: string | undefined = undefined;
  // Inline style of the on icon.
  @Input() iconOnStyle: any = {};
  // Style class of the off icon.
  @Input() iconOffClass: string | undefined = undefined;
  // Inline style of the off icon.
  @Input() iconOffStyle: any = {};
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChanged.emit(this.model);
  }
}
