import { CanActivateFn, Router } from '@angular/router';

import { APP_ROUTES } from '../../database/app-route';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getToken() ? true : router.createUrlTree([APP_ROUTES.SIGN_IN]);
};
