import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  requestInfoForms: any[] = [];
  counter: number = 0;
  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit() {
    this.getRequestInfoForms();
  }

  getRequestInfoForms() {
    this.apiService.getRequestInfoForms().subscribe(
      (response: any[]) => {
        this.requestInfoForms = response;
      },
      (error) => {
        console.log('Error fetching requestInfoForms:', error);
      }
    );
  }

  // updateCompleteStatus(requestId: string, isComplete: boolean) {
    
  //   const updateData = { isComplete: isComplete };
  
  //   this.apiService.updateRequestInfoForm(requestId, updateData).subscribe(
  //     (response: any) => {
  //       console.log('Complete status updated successfully');
  //       // Handle the response if needed
  //     },
  //     (error: any) => {
  //       console.log('Error updating complete status:', error);
  //       // Handle the error appropriately
  //     }
  //   );
  // }
  
  updateRequest(requestId: string, isComplete: boolean) {
    console.log(`Init value of isComplete bool: ${isComplete}`)
    isComplete = !isComplete
    console.log(`${requestId} isComplete value: ` + isComplete);
    this.counter++;
    console.log(this.counter);
    this.apiService.updateRequestInfoForm(requestId, isComplete).subscribe(
      () => {
        console.log('RequestInfoForm updated successfully');
        // Perform any additional actions after successful update
      },
      (error) => {
        console.error('Failed to update RequestInfoForm:', error);
        // Handle error scenario
      }
    );
  }
  


  
  deleteRequestInfoForm(requestId: string) {
    const confirmDelete = window.confirm('Are you sure you want to delete this request?');
    if (confirmDelete) {
      this.apiService.deleteRequestInfoForm(requestId).subscribe(() => {
        console.log('Delete called on ' + requestId);
        this.getRequestInfoForms();
      });
    }
  }
}

