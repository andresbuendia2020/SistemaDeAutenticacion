import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login('andresbuendia560@gmail.com', 'password')
      .then(user => console.log('Logged in user:', user))
      .catch(err => console.error('Login error:', err));
  }

  register() {
    this.authService.register('andresbuendia561@gmail.com', 'password')
      .then(user => console.log('Registered user:', user))
      .catch(err => console.error('Registration error:', err));
  }

  logout() {
    this.authService.logout()
      .then(() => console.log('Logged out'))
      .catch(err => console.error('Logout error:', err));
  }
}