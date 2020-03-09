import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { LunchbComponent } from './components/lunchb/lunchb.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StatusordersComponent } from './components/statusorders/statusorders.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'lunchb/:id', component: LunchbComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'statusorders', component: StatusordersComponent },
  { path: '',  pathMatch:'full', redirectTo: 'home'},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
