import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  paymentMethods = [
    { name: 'Visa', icon: 'https://cdn.simpleicons.org/visa' },
    { name: 'MasterCard', icon: 'https://cdn.simpleicons.org/mastercard' },
    { name: 'JCB', icon: 'https://cdn.simpleicons.org/jcb' },
    { name: 'PayPal', icon: 'https://cdn.simpleicons.org/paypal' },
    { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe' },
  ];
}
