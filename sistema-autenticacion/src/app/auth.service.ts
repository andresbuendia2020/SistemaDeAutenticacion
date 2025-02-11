import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  user,
  signInWithEmailAndPassword
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  // Iniciar sesión con Google
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  // Cerrar sesión
  async logout() {
    return await signOut(this.auth);
  }

  // Obtener el estado de autenticación
  getAuthState(): Observable<any> {
    return user(this.auth);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}

