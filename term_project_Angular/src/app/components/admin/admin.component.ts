import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
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
  
  updateRequest(requestId: string, isComplete: boolean) {
    isComplete = !isComplete
    this.apiService.updateRequestInfoForm(requestId, isComplete).subscribe(
      () => {
        console.log('RequestInfoForm updated successfully');
        this.getRequestInfoForms()
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

