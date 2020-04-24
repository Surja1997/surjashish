import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {LandingPageComponent } from './landing-page/landing-page.component';
import {ContactComponent } from './contact/contact.component';
import {GraphComponent } from './graph/graph.component'

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'graph', component: GraphComponent},
  {path: '**', component: LandingPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

