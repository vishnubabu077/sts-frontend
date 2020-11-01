import { Component, OnInit } from '@angular/core';

import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AdminService } from './admin.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddcourseComponent } from './add-course/addcourse/addcourse.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})




export class AdminComponent implements OnInit {


  public teachers: any;

  public departments: any;
  public courses: any;

  public designations: any;
  public backgroundColor = "primary"

  constructor(private adminService: AdminService, public dialog: MatDialog) { }
  active = 1;
  displayedTeacherColumns: string[] = ['Edit', 'name', 'designation', 'department'];
  displayedDesignationColumns: string[] = ['Edit','designation'];
  displayedDepartmentColumns: string[] = ['Edit','department'];
  displayedCourseColumns: string[] = ['Edit','course'];
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTeacherComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }
  edit(event: any) {
    console.log(event, "edit")
    const dialogRef = this.dialog.open(AddTeacherComponent, {
      width: '500px',
      data: { teacher: event, edit: true }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });

  }
  openDepartmentDialog() : void{
    const dialogRef = this.dialog.open(AddDepartmentComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }
  editDepartment(event: any) {
    console.log(event, "edit")
    const dialogRef = this.dialog.open(AddDepartmentComponent, {
      width: '500px',
      data: { departments: event, edit: true }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }

  openDesignationDialog() : void{
    const dialogRef = this.dialog.open(AddDesignationComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }
  editDesignation(event: any) {
    console.log(event, "edit")
    const dialogRef = this.dialog.open(AddDesignationComponent, {
      width: '500px',
      data: { designations: event, edit: true }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }

  openCourseDialog() : void{
    const dialogRef = this.dialog.open(AddcourseComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }
  editCourse(event: any) {
    console.log(event, "edit")
    const dialogRef = this.dialog.open(AddcourseComponent, {
      width: '500px',
      data: { courses: event, edit: true }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }


  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.adminService.getAllTeachers().subscribe(result => {
      this.teachers = result;
    });


    this.adminService.getAlldepartments().subscribe(result => {
      this.departments = result;
    });

    this.adminService.getAlldesignations().subscribe(result => {
      this.designations = result;
    });

    this.adminService.getAllCourses().subscribe(result => {
      this.courses = result;
    });

  }


  tabchange(event: any) {
    this.loadData();
  
  }

  ngOnDestroy() {
    console.log("destroy")
  }
}
