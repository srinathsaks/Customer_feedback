import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';

const routes: Routes = [
  {path:'#', component: AppComponent},
  {path:'customer-feedback', component:CustomerFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
