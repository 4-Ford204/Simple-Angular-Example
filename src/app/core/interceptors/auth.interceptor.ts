import { AuthService } from '../services/auth.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

const noAuthOrigins = new Set(['https://api.openweathermap.org']);

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const requestURL = new URL(request.url, window.location.origin);
  const noAuth = noAuthOrigins.has(requestURL.origin);

  if (noAuth) {
    return next(request);
  }

  const authService = inject(AuthService);
  const token = authService.getToken();

  if (!token) {
    return next(request);
  }

  return next(
    request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};
