import { Component, Input, Output, EventEmitter } from '@angular/core';
import { course } from '../../models/course';
import { typeOfCourse } from '../../models/typeOfCourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {


  @Input()
  courseData: course = { name: '', teacherName: '', type: typeOfCourse.Frontal, hourNumber: 0, startDate: new Date('0-0-0'), endDate: new Date('0-0-0') }

  @Output()
  registare: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  cancelRegistare: EventEmitter<string> = new EventEmitter<string>();

  IfFrontalOrLaboratory(type: any): boolean {
    if (type == typeOfCourse.Frontal || type == typeOfCourse.Laboratory) {
      return true;
    }
    return false;
  }

  isStartingSoon(): boolean {
    const today = new Date();
    const startDate = new Date(this.courseData.startDate);
    const differenceInDays = Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return differenceInDays <= 7 && differenceInDays > 0; // קורס שמתחיל בשבוע הקרוב
  }

  isEndingSoon(): boolean {
    const today = new Date();
    const endDate = new Date(this.courseData.endDate);
    const differenceInDays = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return differenceInDays <= 30; // קורס שמסתיים בחודש הקרוב
  }

  btnRegistare: boolean = true;
  btnCancelRegistare: boolean = false;
  registrationForTheCourse() {
    const today = new Date();
    const differenceInDays = Math.ceil((this.courseData.startDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    if (differenceInDays > 0) {
      this.btnRegistare = false;
      this.btnCancelRegistare = true;
      this.registare.emit(this.courseData.name);
    }
    else {
      alert('הקוס התחיל כבר - אין אפשרות להירשם')
    }
  }
  cancelRegistrationForTheCourse() {
    this.btnRegistare = true;
    this.btnCancelRegistare = false;
    this.cancelRegistare.emit(this.courseData.name);
  }
}
