import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-float-label-component',
  imports: [FloatLabelModule, FormsModule, InputTextModule],
  templateUrl: './float-label-component.html',
  styleUrl: './float-label-component.css',
})
export class FloatLabelComponent implements OnInit {
  // Defines the positioning of the label relative to the input.
  @Input() variant: 'in' | 'on' | 'over' = 'over';
  // When present, it specifies that the component should have invalid state style.
  @Input() invalid: boolean = false;
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
  @Output() valueChanged = new EventEmitter<any>();

  private readonly valueChangedSubject = new Subject<any>();

  ngOnInit(): void {
    this.valueChangedSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      this.valueChanged.emit(value);
    });
  }

  onValueChanged(event: any) {
    this.modelChange.emit(this.model);
    this.valueChangedSubject.next(this.model);
  }
}
