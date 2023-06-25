import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestInfoComponent } from './request-info/request-info.component';
import { ApiService } from './services/api.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component'; // Import the AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    RequestInfoComponent,
    ConfirmationComponent,
    AdminComponent
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