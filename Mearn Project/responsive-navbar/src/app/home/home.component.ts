import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    { title: 'Easy Navigation', description: 'Explore our site with a sleek, responsive navbar.' },
    { title: 'User-Friendly', description: 'Designed with you in mind for a seamless experience.' },
    { title: 'Fast & Secure', description: 'Enjoy quick load times and secure interactions.' }
  ];
}