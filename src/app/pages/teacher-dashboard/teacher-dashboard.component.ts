import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDashboard } from './teacherDashboard.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})

export class TeacherDashboardComponent implements OnInit {
  public departments: any;
  public students: any;
  public courses: any;
  public backgroundColor = "primary"
  public departmentSelected:boolean =false;
  public selectedDepartment:String;
  public files :any;
  
  constructor(private teacherDashboard:TeacherDashboard,public dialog: MatDialog) { }
  active = 1;
  displayedStudentColumns: string[] = ['Edit', 'name', 'dob','address', 'department','course','email'];
  displayedFilesColumns: string[] = [ 'name', 'department','batch','Download'];
  

  openStudDialog(): void {
    const dialogRef = this.dialog.open(AddstudentComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }
  edit(event: any) {
    console.log(event, "edit")
    const dialogRef = this.dialog.open(AddstudentComponent, {
      width: '500px',
      data: { student: event, edit: true }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });

  }

  download(event: any) {
    

  }
  
  // openStudyMaterialDialog(): void {
  // }
  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }
  openAssignmentDialog(): void {
  }
  openExamDialog(): void {
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.teacherDashboard.getAlldepartments().subscribe(result => {
      this.departments = result;
    });

    
    this.teacherDashboard.getAllcourses().subscribe(result => {
      this.courses = result;
    });

  }

  getFiles(department:any) 
  {this.teacherDashboard.getAllFilesByDepartment(department).subscribe(result => {
    this.files = result;
    //this.departmentSelected=true;
    //this.selectedDepartment=event.value.department;
  });

   
    
  }
  departmentChange(event:any) 
  {this.teacherDashboard.getAllStudentsByDepartment(event.value.department).subscribe(result => {
    this.students = result;
    this.departmentSelected=true;
    this.selectedDepartment=event.value.department;
    this.getFiles(this.selectedDepartment);
  });

    console.log("departments",event.value)
    
  }
  tabchange(event: any) {
    this.loadData();
  
  }
  ngOnDestroy() {
    console.log("destroy")
  }
}



