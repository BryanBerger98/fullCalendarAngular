import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { LoginComponent } from './authentication/login/login.component';
import { HeaderComponent } from './header/header.component';
import { WeekViewComponent } from './week-view/week-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EditEventComponent,
    LoginComponent,
    HeaderComponent,
    WeekViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
