import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../../shared/ui-components/media/image-component/image-component';
import { TooltipModule } from 'primeng/tooltip';
import { TooltipOptions } from '../../../shared/ui-components/overlay/tooltip/tooltip-options';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ImageComponent, TooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  destination: string = 'Da Nang';
  weather: any;
  weatherTooltipOptions = new TooltipOptions({ tooltipLabel: '', tooltipPosition: 'top' });
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

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();
  }

  async fetchWeather() {
    try {
      this.weather = await this.weatherService.getWeather(this.destination);
      this.weatherTooltipOptions.tooltipLabel = this.weather.weather[0].description;
    } catch (error) {
      console.error(error);
    }
  }
}
