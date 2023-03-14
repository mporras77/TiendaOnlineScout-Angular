import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  onProfileImageChange:File;
  fullName: string;
  email: string;
  password: string;
  residence: string;
  role: string;
  profileImage: string;
  loginEmail: string;
  loginPassword:string;
  adminCode: string;
  invalidCode = false;
  registrado: boolean = false;
  acceptTerms: any;

  mostrarRegistro() {
    this.registrado = false;
  }

  mostrarIniciarSesion() {
    this.registrado = true;
  }

  constructor(private router: Router) { }

  register() {
    if (!this.acceptTerms) {
      Swal.fire({
        icon: 'warning',
        title: 'Debe aceptar los términos y condiciones para continuar',
      });
      return;
    }

    // Lógica para registrar al usuario
    // En este ejemplo, simplemente establecemos la variable registrado en true
    this.registrado = true;

    // Verificar si el rol del usuario es un administrador y si se proporcionó un código de acceso válido
    if (this.role === 'administrador' && this.adminCode !== '6539363539363945') {
      this.invalidCode = true;
      return;
    }

    // Mostrar un mensaje indicando que el usuario se registró correctamente
    Swal.fire({
      icon: 'success',
      title: `El usuario ${this.fullName} se ha registrado correctamente.`,
    });

    // Iniciar sesión automáticamente después de registrarse
    this.login();
  }

  login() {
    // Lógica para iniciar sesión
    // En este ejemplo, simplemente establecemos la variable de sesión para el usuario actual
    sessionStorage.setItem('usuarioActual', JSON.stringify({
      fullName: this.fullName,
      email: this.email,
      role: this.role
    }));

    // Mostrar un mensaje indicando que el usuario ha iniciado sesión correctamente
    Swal.fire({
      icon: 'success',
      title: `El usuario ${this.email} ha iniciado sesión correctamente.`,
    });

    this.router.navigate(['/tienda']);
  }

  checkAdminCode() {
    if (this.adminCode !== '6539363539363945') {
      this.invalidCode = true;
    } else {
      this.invalidCode = false;
    }
  }
}
