import { Component, OnInit } from '@angular/core';
import { StudentDashboardService } from './student.service';
import { ProfileModel } from './profile.data';
import { StudentModel } from 'src/app/dto/student.data';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {


  public studentProfile: any;
  public profileModel: ProfileModel;
  displayedStudentColumns: string[] = ['name', 'detail'];

  constructor(private studentDashboardService:StudentDashboardService) { }

  ngOnInit(): void {
this.loadData()

  }

  loadData(){
    this.studentDashboardService.getStudentProfile().subscribe(result => {
     let student:any;
     student = result;
     this.profileModel = new ProfileModel();
     let dobModel= new ProfileModel();
     
     let email= new ProfileModel();
     let address= new ProfileModel();
     let department= new ProfileModel();
      this.profileModel.item_name = "Name";
      dobModel.item_name = "Date of Birth";
      email.item_name = "Email";
      address.item_name = "Address";
      department.item_name= "Department";
      this.profileModel.name= student.name
      dobModel.name= student.dob
      email.name = student.email;
      address.name = student.address;
      department.name=student.department.department;
      this.studentProfile = [this.profileModel,dobModel,email,department,address];

    });

}
}
