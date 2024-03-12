import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import { RegistratCourseComponent } from './component/registrat-course/registrat-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RegistratCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
