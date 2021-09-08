import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { CartComponent } from './public/cart/cart.component';
import { CourseDetailsComponent } from './public/course-details/course-details.component';
import { CourseListComponent } from './public/course-list/course-list.component';
import { CoursesComponent } from './public/courses/courses.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PipesComponent } from './public/pipes/pipes.component';
import { SignupComponent } from './public/signup/signup.component';

const routes: Routes = [
    {path: 'admin', loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule)},
    {path: '', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'courses', component: CoursesComponent, children: [
        {path: '', component: CourseListComponent},
        {path: 'course-details/:id', component: CourseDetailsComponent},
    ]},
    {path: 'cart', component: CartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'notfound', component: NotfoundComponent},
    {path: '**', redirectTo: '/notfound'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }