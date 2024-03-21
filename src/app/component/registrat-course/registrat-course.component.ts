import { Component, Input, Output, input } from '@angular/core';
import { course } from '../../models/course';
import { EventEmitter } from 'stream';
import { typeOfCourse } from '../../models/typeOfCourse';

@Component({
  selector: 'app-registrat-course',
  templateUrl: './registrat-course.component.html',
  styleUrl: './registrat-course.component.scss'
})
export class RegistratCourseComponent {

  courses: course[] = [
    { name: 'מערכות הפעלה', teacherName: 'ליוש', type: typeOfCourse.Frontal, hourNumber: 170, startDate: new Date('2024-03-15'), endDate: new Date('2024-05-10') },
    { name: 'Angular', teacherName: 'קראוס', type: typeOfCourse.Laboratory, hourNumber: 40, startDate: new Date('2023-02-10'), endDate: new Date('2024-07-30') },
    { name: 'nodeJS', teacherName: 'קמינצקי', type: typeOfCourse.Computerized, hourNumber: 65, startDate: new Date('2023-02-10'), endDate: new Date('2024-03-10') },
    { name: '.net core', teacherName: 'זילברברג', type: typeOfCourse.Frontal, hourNumber: 30, startDate: new Date('2024-03-30'), endDate: new Date('2024-03-30') },
    { name: 'C#', teacherName: 'פריש', type: typeOfCourse.Frontal, hourNumber: 70, startDate: new Date('2024-02-15'), endDate: new Date('2025-04-10') },
    { name: 'וורדפרס', teacherName: 'דיין', type: typeOfCourse.Frontal, hourNumber: 20, startDate: new Date('2024-03-20'), endDate: new Date('2024-04-10') },
    { name: 'java', teacherName: 'בלכמן', type: typeOfCourse.Frontal, hourNumber: 200, startDate: new Date('2024-04-30'), endDate: new Date('2024-04-10') },
  ]

  courseRegistra: string[] = [];

  // @Input() display: boolean = false;


  registareCourse($event: string) {
    this.courseRegistra.push($event);
  }
  CancelRegistareCourse($event: string) {
    const index = this.courseRegistra.indexOf($event);
    if (index !== -1) {
      this.courseRegistra.splice(index, 1);
    }
  }
  CancelAllRegistareCourse() {
    this.courseRegistra.splice(0, this.courseRegistra.length);
  }
  AddC: boolean = false;
  addCourse() {
    this.AddC = true;
  }
  add($event:course){
    this.courses.push($event);
  }

}
