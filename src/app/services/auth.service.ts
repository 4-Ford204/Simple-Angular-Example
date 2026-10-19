import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly ACCESS_TOKEN = 'access_token';
  private readonly DEFAULT_USERNAME = 'adminorh@gmail.com';
  private readonly DEFAULT_PASSWORD = 'Admin#123';

  private readonly http = inject(HttpClient);

  getToken(): string | null {
    return sessionStorage.getItem(this.ACCESS_TOKEN);
  }

  signIn(username: string, password: string): boolean {
    if (username != this.DEFAULT_USERNAME || password != this.DEFAULT_PASSWORD) {
      return false;
    }

    sessionStorage.setItem(this.ACCESS_TOKEN, username);

    return true;
  }

  signOut(): void {
    return sessionStorage.removeItem(this.ACCESS_TOKEN);
  }
}
