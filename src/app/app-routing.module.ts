import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CouturecapComponent } from './components/couturecap/couturecap.component';
import { HotellericapComponent } from './components/hotellericap/hotellericap.component';
import { HotelleribepComponent } from './components/hotelleribep/hotelleribep.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "couturecap", component: CouturecapComponent },
  { path: "hotellericap", component: HotellericapComponent },
  { path: "hotelleribep", component: HotelleribepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
