import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  shouldShowForm(): boolean {
    const currentUrl = this.router.url;
    
    if (currentUrl.includes('/confirmation')) {
      // Show form only on pages other than "/confirmation"
      return false;
    }
    
    if (currentUrl.includes('/admin')) {
      // Show form only on pages other than "/admin"
      return false;
    }
    
    // Show form on all other pages
    return true;
  }
}
