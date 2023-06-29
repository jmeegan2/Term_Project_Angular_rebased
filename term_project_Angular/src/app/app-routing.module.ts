import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'confirmation/:email', component: ConfirmationComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }