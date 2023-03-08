import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  register() {
      // Lógica para registrar al usuario
      this.registrado = true;

  }

  login() {
    // Add code to login user
  }

  checkAdminCode() {
    if (this.adminCode !== '6539363539363945') {
      this.invalidCode = true;
    } else {
      this.invalidCode = false;
    }
  }
}