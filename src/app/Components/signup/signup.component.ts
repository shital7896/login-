import { Component,  } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { SignupService } from './Services/signup.service';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  successMessage: string | null = null;
  formData: any;



  constructor(private fb : FormBuilder, private signupService: SignupService,private router: Router )  {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-z_]{1,20}$')]],
      passWord: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,30}$')
      ]],
      confirmPassword: ['',Validators.required],
      fullName: ['', [Validators.required, Validators.maxLength(50)]],
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')],
      email: ['',Validators.required],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

 
  onSubmit() {
    if (this.signUpForm.valid) {
      this.formData = this.signUpForm.value;
      // this.signupService.registerUser(formData);
      console.log('Form is valid. Storing data:', this.formData);
    } else {
      console.log('Form is invalid. please correct the errors ');
     // console.log('Signup successful:', Response);
     //ValidateForm.validateAllFormFields(this.signUpForm);
    }
  }

  // onSubmit() {
  //   if (this.signUpForm.valid) {
  //     // The form is valid; proceed with the signup logic.
  //     this.signupService.signup(this.user).subscribe(
  //       (response) => {
  //         console.log('Signup successful:', response);
  //         // Here, you can handle the response, show success messages, or redirect the user to another page.
  //       },
  //       (error) => {
  //         console.error('Signup failed:', error);
  //         // Handle errors, display error messages, or perform appropriate actions.
  //       }
  //     );
  //   } else {
  //     // The form is not valid; validate all form fields and show error messages.
  //     ValidateForm.validateAllFormFields(this.signUpForm);
  //     alert("Your form is invalid")
  //   }
  // }

  // validateAllFormFields(formGroup: FormGroup) {
  //   // Recursively mark all form controls as touched to trigger error messages.
  //   Object.values(formGroup.controls).forEach((control) => {
  //     control.markAsTouched();
  //     if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }

  


 
  }



