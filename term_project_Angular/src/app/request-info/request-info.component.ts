import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent {
  requestForm!: FormGroup;
  formActionURL: string = '';

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
    this.createRequestForm();
  }

  createRequestForm() {
    this.requestForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      campus: ['', Validators.required],
      workshop: ['']
    });
  }

  submitForm() {
    if (this.requestForm.valid) {
      const formData = this.requestForm.value;
      formData.isComplete = false; // Set the default value of isComplete to false
      this.apiService.submitForm(formData).subscribe(
        (response: any) => {
          console.log('Form submitted successfully');
    
          const email = formData.email;
  
          // Navigate to the 'confirmation' page with the email parameter
          this.router.navigate(['/confirmation', email]);
  
          this.requestForm.reset();
        },
        (error: any) => {
          console.log('Error submitting form:', error);
          // Handle the error appropriately
        }
      );
    } else {
      this.markFormGroupTouched(this.requestForm);
    }
  }



  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
