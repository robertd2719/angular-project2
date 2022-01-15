import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerMainComponent,
    CustomerListComponent,
    CustomerInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
