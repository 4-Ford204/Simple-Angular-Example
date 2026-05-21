import { Component, Input } from '@angular/core';
import { ToastModule, ToastPositionType } from 'primeng/toast';

@Component({
  selector: 'app-toast-component',
  imports: [ToastModule],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.css',
})
export class ToastComponent {
  // Key of the message in case message is targeted to a specific toast component.
  @Input() key: string | undefined = undefined;
  // Position of the toast in viewport.
  @Input() position: ToastPositionType = 'top-right';
  // Transform options of the show animation.
  @Input() showTransformOptions: string = 'translateY(100%)';
  // Transform options of the hide animation.
  @Input() hideTransformOptions: string = 'translateY(-100%)';
  // Transition options of the show animation.
  @Input() showTransitionOptions: string = '300ms ease-out';
  // Transition options of the hide animation.
  @Input() hideTransitionOptions: string = '250ms ease-in';
  // Object literal to define styles per screen size.
  @Input() breakpoints: { [key: string]: any } | undefined = undefined;
}
