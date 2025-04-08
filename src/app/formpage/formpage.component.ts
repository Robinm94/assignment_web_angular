import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

type UserType = {
  name: string;
  email: string;
  phone: string;
};

@Component({
  selector: 'app-formpage',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formpage.component.html',
  styleUrl: './formpage.component.css',
})
export class FormpageComponent {
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
  });
  submitted = false;
  users: UserType[] = [];

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.valid) {
      console.log('Form submitted with data:', this.userForm.value);

      // Add the user to the array
      const newUser: UserType = {
        name: this.userForm.value.name || '',
        email: this.userForm.value.email || '',
        phone: this.userForm.value.phone || '',
      };

      this.users.push(newUser);

      // Reset the form for a new entry
      this.userForm.reset();
      this.submitted = false;
    } else {
      console.log('Form validation failed');
    }
  }
}
