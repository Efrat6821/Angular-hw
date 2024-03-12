import { typeOfCourse }from './typeOfCourse';

export interface course{
    name:string,
    teacherName:string
    hourNumber:number,
    type:typeOfCourse,
    startDate: Date,
    endDate:Date
}