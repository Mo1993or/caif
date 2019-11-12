import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CouturecapComponent } from './components/couturecap/couturecap.component';
import { HotellericapComponent } from './components/hotellericap/hotellericap.component';
import { HotelleribepComponent } from './components/hotelleribep/hotelleribep.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CouturecapComponent,
    HotellericapComponent,
    HotelleribepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
