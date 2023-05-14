import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { VparkFleetComponent } from './pages/vpark-fleet/vpark-fleet.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TripRouteComponent } from './pages/trip-route/trip-route.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    VparkFleetComponent,
    DashboardComponent,
    TripRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
