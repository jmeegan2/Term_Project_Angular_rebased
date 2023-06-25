import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'confirmation/:email', component: ConfirmationComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }