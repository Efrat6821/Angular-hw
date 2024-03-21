import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  userName: string = '';
  password: string = '';
  formSubmit: boolean = false;
  ShowAllCourses:boolean=false;
  @ViewChild('f') f: NgForm | null = null
  send() {
    this.formSubmit=true;
    console.log(this.f);
    console.log(this.userName);
    console.log(this.password);
    if(this.f?.valid){
      this.ShowAllCourses=true;
    }
  }

}
