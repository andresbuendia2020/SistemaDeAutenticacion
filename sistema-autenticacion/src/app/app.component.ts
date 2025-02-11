import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email: string = '';  // Para el correo electrónico
  password: string = '';  // Para la contraseña
  user: any = null;  // Almacenar el usuario logueado
  token: string = 'abc123xyz456'

  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef) {}

  // Iniciar sesión con correo y contraseña
  login() {
    this.authService.login(this.email, this.password)
      .then(user => {
        this.user = user;
        this.cdRef.detectChanges();
        console.log('Logged in user:', user);
      })
      .catch(err => {
        console.error('Login error:', err);
      });
  }


  // Iniciar sesión con Google
  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(user => {
        this.user = user;  // Guardar el usuario logueado con Google
        this.cdRef.detectChanges();
        console.log('Logged in with Google:', user);
      })
      .catch(err => {
        console.error('Google login error:', err);
      });
  }

  // Cerrar sesión
  logout() {
    this.authService.logout()
      .then(() => {
        this.user = null;  // Limpiar el usuario
        this.cdRef.detectChanges();
        console.log('Logged out');
      })
      .catch(err => {
        console.error('Logout error:', err);
      });
  }
}
// import { Component } from '@angular/core';
// import {RouterOutlet } from '@angular/router';  // Necesitamos Router para la navegación
// import { FormsModule } from '@angular/forms';
// import { AuthService } from './auth.service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, RouterOutlet],  // Usamos RouterModule con las rutas
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   email: string = '';
//   password: string = '';
//   user: any = null;

//   constructor(private authService: AuthService, private router: RouterOutlet) {}

//   login() {
//     this.authService.login(this.email, this.password)
//       .then(user => {
//         this.user = user;
//         localStorage.setItem('user', JSON.stringify(user));
//       })
//       .catch(err => {
//         console.error('Login error:', err);
//       });
//   }

//   register() {
//     this.authService.register(this.email, this.password)
//       .then(user => {
//         this.user = user;
//         console.log('Registered user:', user);
//       })
//       .catch(err => {
//         console.error('Registration error:', err);
//       });
//   }

//   loginWithGoogle() {
//     this.authService.loginWithGoogle()
//       .then(user => {
//         this.user = user;
//         localStorage.setItem('user', JSON.stringify(user));
//       })
//       .catch(err => {
//         console.error('Google login error:', err);
//       });
//   }

//   logout() {
//     this.authService.logout()
//       .then(() => {
//         this.user = null;
//         localStorage.removeItem('user');
//       })
//       .catch(err => {
//         console.error('Logout error:', err);
//       });
//   }
// }

