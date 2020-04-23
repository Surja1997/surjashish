import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {LandingPageComponent } from './landing-page/landing-page.component';
import {ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

