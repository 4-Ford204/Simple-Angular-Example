import { ButtonComponent } from '../../shared/ui-components/button-component/button-component';
import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  imports: [ButtonComponent, FloatLabelModule, FormsModule, InputTextModule, PasswordModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  username: string = '';
  password: string = '';

  PrimeIcons = PrimeIcons;
}
