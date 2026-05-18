import { Component } from '@angular/core';
import { ImageComponent } from '../../../shared/ui-components/media/image-component/image-component';

@Component({
  selector: 'app-footer',
  imports: [ImageComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  paymentMethods = [
    { name: 'ZaloPay', icon: 'https://cdn.simpleicons.org/zalo' },
    { name: 'Visa', icon: 'https://cdn.simpleicons.org/visa' },
    { name: 'MasterCard', icon: 'https://cdn.simpleicons.org/mastercard' },
    { name: 'PayPal', icon: 'https://cdn.simpleicons.org/paypal' },
  ];
  contactMethods = [
    { name: 'Gmail', icon: 'https://cdn.simpleicons.org/gmail' },
    { name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook' },
    { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram' },
    { name: 'Youtube', icon: 'https://cdn.simpleicons.org/youtube' },
  ];
}
