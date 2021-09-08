import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../public/aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {path: '', component: DashboardComponent},
            {path: 'about', component: AboutusComponent},
            {path: 'contact', component: ContactusComponent},
            {path: 'profile', component: ProfileComponent}
        ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }