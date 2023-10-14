import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent  {
 updateProfileForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.updateProfileForm = this.fb.group({
      profilePicture: ['', Validators.required],
      bio: ['', Validators.maxLength(250)] 
    })
  } 

  onSubmit() {
    if (this.updateProfileForm.valid) {
      // The form is valid; you can submit the data to the server or perform necessary actions.
    } else {
      // Handle form validation errors.
    }
  }

  onSkip() {
    // Handle the "SKIP" button click event (e.g., navigate to another page).
    this.router.navigate(['/login']); // Replace 'next-page' with the route you want to navigate to.
  }

}
