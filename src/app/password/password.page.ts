import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage {
  password: string = '';  
  confirmPassword: string = '';  
  passwordMismatch: boolean = false;

  constructor() {}

  validatePasswords() {
    if (this.password! !== this.confirmPassword!) {
      this.passwordMismatch = true;
    } else {
      this.passwordMismatch = false;
      alert('¡Las contraseñas coinciden!');
    }
  }
}
