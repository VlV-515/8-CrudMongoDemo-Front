import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { HeaderComponent } from './components/header/header.component';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { Page404Component } from './components/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableUsersComponent,
    FormUsersComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
