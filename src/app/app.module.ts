import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//SERVICIOS
import { LunchService } from './services/lunch.service';
import { BreakfastService } from './services/breakfast.service';



//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { StatusordersComponent } from './components/statusorders/statusorders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LunchbComponent } from './components/lunchb/lunchb.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreakfastComponent,
    LunchComponent,
    OrdersComponent,
    NavbarComponent,
    LunchbComponent,
    StatusordersComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LunchService,
    BreakfastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
