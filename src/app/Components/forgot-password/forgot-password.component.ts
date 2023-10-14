import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {

  
  emailOrPhone: string = '';
  otp: string = '';
  newPassword: string = '';
  showResetPasswordForm: boolean = false;

  constructor(private router: Router) {}

  sendOTP() {
   // Implement the logic to send OTP to the provided email or phone.
    // In a real application, you would typically send an OTP via email or SMS.
    // For this example, we'll simply check if the provided email/phone is valid.
    if (this.validateEmailOrPhone(this.emailOrPhone)) {
      // Simulate sending an OTP and show the reset password form.
      this.showResetPasswordForm = true;
    } else {
      console.log('Invalid email or phone number.');
    }
  }

  resetPassword() {
    // Implement the logic to verify OTP and reset the password.
    // In a real application, you would validate the OTP and reset the password.
    // For this example, we'll just check if the OTP is '123456'.
    if (this.otp === '123456') {
      // Simulate a successful password reset.
      console.log('Password reset successful');

      // Add navigation logic to the login page.
      this.router.navigate(['/login']);
    } else {
      console.log('Invalid OTP. Please enter the correct OTP.');
    }
  }

  private validateEmailOrPhone(value: string): boolean {
    // Implement validation logic for email or phone number.
    // For this example, we'll assume that a valid email/phone contains at least 6 characters.
    return value.length >= 6;
  }



}
