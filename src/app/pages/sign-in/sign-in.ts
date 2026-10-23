import { APP_ROUTES } from '../../database/app-route';
import { AuthService } from '../../core/services/auth.service';
import { ButtonComponent } from '../../shared/ui-components/button-component/button-component';
import { Component } from '@angular/core';
import { FloatLabelInputComponent } from '../../shared/ui-components/form/float-label/float-label-input-component/float-label-input-component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FloatLabelPasswordComponent } from '../../shared/ui-components/form/float-label/float-label-password-component/float-label-password-component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PrimeIcons } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [
    ButtonComponent,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    FloatLabelInputComponent,
    FloatLabelPasswordComponent,
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  username: string = '';
  password: string = '';
  error: string = '';

  PrimeIcons = PrimeIcons;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  async onSignInButtonPressed() {
    if (this.authService.signIn(this.username, this.password)) {
      this.error = '';
      await this.router.navigateByUrl(APP_ROUTES.HOME);
    } else {
      this.error = 'Incorrect username or password';
    }
  }
}
