import { Component, OnInit, Inject } from '@angular/core';

import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherModel } from 'src/app/dto/teacher.data';
import { SchoolingHttpService } from 'src/app/library/http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
  providers: []
})
export class AddTeacherComponent implements OnInit {
  public departments: any;
  public designations: any;
  addTeacherForm: FormGroup
  public teacher: TeacherModel;
  public edit: boolean = false;
  public teacherToEdit: TeacherModel;


  constructor(private adminService: AdminService,
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log(this.data, "edit teacher")
    if (this.data !== undefined && this.data !== null) {
      this.edit = this.data.edit;
      this.teacherToEdit = this.data.teacher;
    }
    this.loadData();
    this.buildForm();
  }

  buildForm() {
    this.addTeacherForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        departmentForm: ["", Validators.required],
        designationForm: ["", Validators.required],
      }
    )
    if (this.edit) {
      this.firstName.setValue(this.teacherToEdit.first_name)
      this.lastName.setValue(this.teacherToEdit.last_name);
      this.departmentForm.setValue(this.teacherToEdit.department);
      this.designationForm.setValue(this.teacherToEdit.designation);
    }
  }

  loadData() {

    this.adminService.getAlldepartments().subscribe(result => {
      this.departments = result;
    });

    this.adminService.getAlldesignations().subscribe(result => {
      this.designations = result;
    });

  }

  saveTeacher() {

    this.addTeacherForm.markAllAsTouched();
    this.createModel();
    if (this.edit) {
      this.adminService.editTeacher(this.teacher).subscribe(result => {

        this.close();

      });;
    }
    else {
      this.adminService.saveTeacher(this.teacher).subscribe(result => {

        this.close();
      });;
    }
  }

  close() {
    this.dialogRef.close();
  }

  get firstName() {
    return this.addTeacherForm.get("firstName");
  }
  get lastName() {
    return this.addTeacherForm.get("lastName");
  }

  get departmentForm() {
    return this.addTeacherForm.get("departmentForm");
  }

  get designationForm() {
    return this.addTeacherForm.get("designationForm");
  }

  createModel() {
    this.teacher = new TeacherModel();
    this.teacher.first_name = this.firstName.value;
    this.teacher.last_name = this.lastName.value
    this.teacher.department = this.departmentForm.value;
    this.teacher.designation = this.designationForm.value;
    if (this.edit) {
      this.teacher.id = this.teacherToEdit.id;
    }

  }


  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


}
