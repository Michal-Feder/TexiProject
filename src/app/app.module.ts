import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BidComponent } from './bid/bid.component';
import { FixedTravelComponent } from './fixed-travel/fixed-travel.component';
import { AddFixedTravelComponent } from './add-fixed-travel/add-fixed-travel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { DriversComponent } from './drivers/drivers.component';
import { EditFixedTravelComponent } from './edit-fixed-travel/edit-fixed-travel.component';
import { TravelComponent } from './travel/travel.component';
import { DriverComponent } from './driver/driver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    BidComponent,
    FixedTravelComponent,
    AddFixedTravelComponent,
    DriversComponent,
    EditFixedTravelComponent,
    TravelComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
