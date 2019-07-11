import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { LoginComponent } from './authentication/login/login.component';
import { WeekViewComponent } from './week-view/week-view.component';

const routes: Routes = [
  { path: 'home', component: WeekViewComponent},
  { path: 'login', component: LoginComponent },
  { path: 'event/edit/:id', component: EditEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
