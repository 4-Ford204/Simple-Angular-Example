import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../../shared/ui-components/media/image-component/image-component';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ImageComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  destination: string = 'Da Nang';
  weather: any;
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

  private readonly weatherService = inject(WeatherService);

  ngOnInit(): void {
    this.fetchWeather();
  }

  async fetchWeather() {
    try {
      this.weather = await this.weatherService.getWeather(this.destination);
      console.log(this.weather);
    } catch (error) {
      console.error(error);
    }
  }
}
