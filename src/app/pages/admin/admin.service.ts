
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SchoolingHttpService } from 'src/app/library/http.service';
import { TeacherModel } from 'src/app/dto/teacher.data';
import { DepartmentModel } from 'src/app/dto/department.data';
import { DesignationModel } from 'src/app/dto/designation.data';
import { CourseModel } from 'src/app/dto/course.data';


@Injectable({
    providedIn:'root'
  })
export class AdminService {
    constructor(private httpService : SchoolingHttpService) { }
  
getAllTeachers(){
   return  this.httpService.get("/admin/allTeachers");
}
getAlldepartments(){
  return  this.httpService.get("/admin/departments");
}
getAlldesignations(){
  return  this.httpService.get("/admin/designation");
}
getAllCourses(){
  return  this.httpService.get("/admin/courses");
}
saveTeacher(teacher:TeacherModel){
 return  this.httpService.post("/admin/addTeacher",teacher);
}
editTeacher(teacher:TeacherModel){
  return  this.httpService.put("/admin/editTeacher",teacher);
 }
 saveDepartment(departments:DepartmentModel){
  return  this.httpService.post("/admin/addDepartments",departments);
 }
 editDepartment(departments:DepartmentModel){
  return  this.httpService.put("/admin/editDepartment",departments);
 }
 saveDesignation(designations:DesignationModel){
  return  this.httpService.post("/admin/addDesignations",designations);
 }
 editDesignation(designations:DesignationModel){
  return  this.httpService.put("/admin/editDesignation",designations);
 }
 saveCourse(courses:CourseModel){
  return  this.httpService.post("/admin/addCourses",courses);
 }
 editCourse(courses:CourseModel){
  return  this.httpService.put("/admin/editCourse",courses);
 }
}