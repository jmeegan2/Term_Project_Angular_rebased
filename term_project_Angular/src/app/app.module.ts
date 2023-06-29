import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestInfoComponent } from './components/request-info/request-info.component';
import { ApiService } from './services/api.service';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'; // Import the AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    RequestInfoComponent,
    ConfirmationComponent,
    AdminComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule // Add the AppRoutingModule to imports
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }