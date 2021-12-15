import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

// defines all available routes, path specifies the directory path relative to the current directory
const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'cart', component: CartComponent},
  {path:'browse/:countryid', component: BrowseComponent},
  {path:'browse/:searchVal', component: BrowseComponent},
  {path:'browse', component: BrowseComponent},
  {path:'detail/:tourid', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LandingComponent, CartComponent, BrowseComponent ]
