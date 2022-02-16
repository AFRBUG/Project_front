import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { LoginComponent } from './login/login.component';
import {OrdersComponent} from'./orders/orders.component';


const routes: Routes = [
{path:"login",component:LoginComponent},
{ path:"orders",component:OrdersComponent},
{path:"covid",component:CovidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
