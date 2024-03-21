import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { course } from '../../models/course';
import { typeOfCourse } from '../../models/typeOfCourse';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {

  @Output() newCourse: EventEmitter<course> = new EventEmitter<course>();

  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      teacherName: new FormControl('', Validators.minLength(4)),
      numberHours: new FormControl('', Validators.min(1)),
      type: new FormControl(''),
      startDate: new FormControl(new Date('2024-04-30')),
      endDate: new FormControl(new Date('2024-04-30')),

    })
  }
  courses: course = { name: '', teacherName: '', type: typeOfCourse.Frontal, hourNumber: 0, startDate: new Date('2024-04-30'), endDate: new Date('2025-04-10') };

  save() {
    console.log(this.form);

    if (!this.form.value.name)
      alert('לא הוזן שם קורס')
    else if (this.form.valid) {
      console.log(this.form.controls);
      console.log(this.form.controls['date']);
      this.courses.name = this.form.controls['name'].value;
      this.courses.teacherName = this.form.controls['teacherName'].value;
      this.courses.type = this.form.controls['type'].value;
      this.courses.startDate = this.form.controls['startDate'].value;
      this.courses.endDate = this.form.controls['endDate'].value;
      this.courses.hourNumber = this.form.controls['numberHours'].value;

      this.newCourse.emit(this.courses)
      alert(' הקורס נוסף בהצלחה✔️✔️✔️')
    }
  }


}
