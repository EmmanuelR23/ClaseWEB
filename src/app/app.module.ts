import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
