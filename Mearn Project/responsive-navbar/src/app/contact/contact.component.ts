import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submitForm() {
    if (this.name && this.email && this.message) {
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message
      });
      alert('Thank you for your message! We’ll get back to you soon.');
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill in all fields.');
    }
  }
}