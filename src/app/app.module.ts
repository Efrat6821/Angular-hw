import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import { RegistratCourseComponent } from './component/registrat-course/registrat-course.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddCourseComponent } from './component/add-course/add-course.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RegistratCourseComponent,
    LogInComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
