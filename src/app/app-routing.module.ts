import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { BrowseComponent } from './browse/browse.component';

// defines all available routes, path specifies the directory path relative to the current directory
const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'cart', component: CartComponent},
  {path:'browse', component:BrowseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LandingComponent, CartComponent, BrowseComponent ]
