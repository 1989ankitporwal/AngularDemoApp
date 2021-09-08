import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { CoursesComponent } from './public/courses/courses.component';
import { CartComponent } from './public/cart/cart.component';
import { PipesComponent } from './public/pipes/pipes.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { CourseDetailsComponent } from './public/course-details/course-details.component';
import { CourseListComponent } from './public/course-list/course-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './public/home/home.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CoursesComponent,
    CartComponent,
    PipesComponent,
    AboutusComponent,
    CourseDetailsComponent,
    CourseListComponent,
    NotfoundComponent,
    HomeComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
