import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      // Mock login logic (replace with real auth in production)
      console.log('Login attempt:', {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      });
      alert('Login successful! Redirecting to Home...');
      this.router.navigate(['/']); // Redirect to home page
      // In a real app, update isLoggedIn via a service
    } else {
      alert('Please enter both username and password.');
    }
  }
}