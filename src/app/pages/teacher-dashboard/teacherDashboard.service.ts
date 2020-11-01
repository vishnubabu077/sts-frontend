import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { StudentModel } from 'src/app/dto/student.data';
import { SchoolingHttpService } from 'src/app/library/http.service';

@Injectable({
    providedIn:'root'
  })
export class  TeacherDashboard{
    constructor(private httpService : SchoolingHttpService ) { }

    getAlldepartments(){
        return  this.httpService.get("/admin/departments");
      }

      getAllcourses(){
        return  this.httpService.get("/admin/courses");
      }


      getAllStudents(){
        return  this.httpService.get("/teacherdashboard/allStudents");
      }

      getAllStudentsByDepartment(department){
      let params:HttpParams =  new HttpParams; 
      params  = params.set("department",department);
        return  this.httpService.get("/teacherdashboard/allStudentsByDepartment",params);
      }

      getAllFilesByDepartment(department){
        let params:HttpParams =  new HttpParams; 
        params  = params.set("department",department);
          return  this.httpService.get("/getFilesByDepartment",params);
        }

      saveStudent(student:StudentModel){
        return  this.httpService.post("/teacherdashboard/addStudent",student);
       }
       editStudent(student:StudentModel){
        return  this.httpService.put("/teacherdashboard/editStudent",student);
       }
}
