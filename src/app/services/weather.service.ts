import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly key = '25efc467a3e2448e27c2857cf7435ffd';

  async getWeather(geoLocation: string = 'Đà Nẵng') {
    return firstValueFrom(
      this.http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${geoLocation}&appid=${this.key}&units=metric&lang=vi`
      )
    );
  }
}
