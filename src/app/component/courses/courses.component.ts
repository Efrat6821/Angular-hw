import { Component } from '@angular/core';
import { course } from '../../models/course';
import { typeOfCourse } from '../../models/typeOfCourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  courses: course[] = [
    { name: 'מערכות הפעלה', teacherName: 'ליוש', type: typeOfCourse.Frontal, hourNumber: 170, startDate: new Date('2024-03-15'), endDate: new Date('2024-05-10') },
    { name: 'Angular', teacherName: 'קראוס', type: typeOfCourse.Laboratory, hourNumber: 40, startDate: new Date('2023-02-10'), endDate: new Date('2024-07-30') },
    { name: 'nodeJS', teacherName: 'קמינצקי', type: typeOfCourse.Computerized, hourNumber: 65, startDate: new Date('2023-02-10'), endDate: new Date('2024-03-10') },
    { name: '.net core', teacherName: 'זילברברג', type: typeOfCourse.Frontal, hourNumber: 30, startDate: new Date('2024-03-07'), endDate: new Date('2024-03-30') },
    { name: 'C#', teacherName: 'פריש', type: typeOfCourse.Frontal, hourNumber: 70, startDate: new Date('2024-02-15'), endDate: new Date('2025-04-10') },
    { name: 'וורדפרס', teacherName: 'דיין', type: typeOfCourse.Frontal, hourNumber: 20, startDate: new Date('2024-03-20'), endDate: new Date('2024-04-10') },
    { name: 'java', teacherName: 'בלכמן', type: typeOfCourse.Frontal, hourNumber: 200, startDate: new Date('2024-04-30'), endDate: new Date('2024-04-10') },
  ]

  IfFrontalOrLaboratory(type: any): boolean {
    if (type == typeOfCourse.Frontal || type == typeOfCourse.Laboratory) {
      return true;
    }
    return false;
  }
  // dateNow(){
  //   return Date.now;
  // }

  isStartingSoon(c:course): boolean {
    const today = new Date();
    const startDate = new Date(c.startDate);
    const differenceInDays = Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    console.log(`${differenceInDays} ${c.name}  start`);
    return differenceInDays <= 7&&differenceInDays>0; // קורס שמתחיל בשבוע הקרוב
  }

  isEndingSoon(c:course): boolean {
    const today = new Date();
    const endDate = new Date(c.endDate);
    const differenceInDays = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    console.log(`${differenceInDays} ${c.name}  end`);
    return differenceInDays <= 30; // קורס שמסתיים בחודש הקרוב
  }

  Registration_for_the_course(c: course) {
    const today = new Date();
    const differenceInDays = Math.ceil((c.startDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    console.log(differenceInDays);

    if (differenceInDays>0) {
      alert('הרישום בוצע בהצלחה!!!!')
    }
  }
}
