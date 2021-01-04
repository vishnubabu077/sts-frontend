import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { StudentModel } from 'src/app/dto/student.data';
import { SchoolingHttpService } from 'src/app/library/http.service';

@Injectable({
    providedIn:'root'
  })
export class  StudentDashboardService{
    constructor(private httpService : SchoolingHttpService ) { }

    getStudentProfile(){
        return  this.httpService.get("/studentdashboard/studentProfile");
      }

    }