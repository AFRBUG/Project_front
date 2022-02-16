import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { CovidComponent } from './covid/covid.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { MapserviceService } from './services/mapservice.service';


@NgModule({
  declarations: [
    AppComponent,
     OrdersComponent,
       LoginComponent,
       CovidComponent, 
       DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    
 

  ],
  providers: [
    MapserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
