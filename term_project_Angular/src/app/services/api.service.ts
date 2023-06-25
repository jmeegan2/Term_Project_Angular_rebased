import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private serverUrl = 'http://localhost:3001/api/requestInfoForm'; // Replace with your server-side URL

  constructor(private http: HttpClient) { }

  getRequestInfoForms(): Observable<any> {
    return this.http.get(this.serverUrl);
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post(this.serverUrl, formData);
  }

  deleteRequestInfoForm(requestId: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/${requestId}`);
  }

  updateRequestInfoForm(requestId: string, isComplete: boolean) {
    const url = `http://localhost:3001/api/requestInfoForm/${requestId}`;
    const body = { isComplete };
    return this.http.put(url, body);
  }



  // If you need to update or delete a requestInfoForm, you can add corresponding methods here using put() and delete() requests.
}
