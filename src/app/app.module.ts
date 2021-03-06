import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ObserverComponent } from './observer/observer.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerMainComponent,
    CustomerListComponent,
    CustomerInputComponent,
    NavbarComponent,
    HomeComponent,
    ObserverComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'customers', component : CustomerMainComponent},
      { path: 'observer', component: ObserverComponent},
      { path: 'user', component: UserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
