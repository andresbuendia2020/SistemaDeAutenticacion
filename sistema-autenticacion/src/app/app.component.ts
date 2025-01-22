import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private auth: Auth) {
    console.log('Firebase Auth:', this.auth);
  }
}
