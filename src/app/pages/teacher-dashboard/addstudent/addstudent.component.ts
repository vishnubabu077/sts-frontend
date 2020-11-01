import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherDashboard } from '../teacherDashboard.service';
import { StudentModel } from 'src/app/dto/student.data';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
    public departments: any;
    public courses: any;
    addStudentForm: FormGroup;
    public student: StudentModel;
     public edit: boolean = false;
     public studentToEdit: StudentModel;
  
  
    constructor(private teacherDashboard:TeacherDashboard,
      private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddstudentComponent>, 
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    ngOnInit(): void {
  
      console.log(this.data, "edit student")
      if (this.data !== undefined && this.data !== null) {
        this.edit = this.data.edit;
        this.studentToEdit = this.data.student;
      }
      this.loadData();
      this.buildForm();
    }
  
    buildForm() {
      this.addStudentForm = this.formBuilder.group(
        {
          name: ["", Validators.required],
          dob: ["", Validators.required],
          address: ["", Validators.required],
         // gender: ["", Validators.required],
          departmentForm: ["", Validators.required],
          courseForm: ["", Validators.required],
          // fName: ["", Validators.required],
          // fNumber: ["", Validators.required],
          // mName: ["", Validators.required],
          // mNumber: ["", Validators.required],
          // bloodGroup: ["", Validators.required],
          email: ["", Validators.required],
        }
      )
      if (this.edit) {
        this.name.setValue(this.studentToEdit.name)
         this.dob.setValue(this.studentToEdit.dob);
        this.address.setValue(this.studentToEdit.address)
        // this.gender.setValue(this.studentToEdit.gender);
        this.departmentForm.setValue(this.studentToEdit.department);
        this.courseForm.setValue(this.studentToEdit.course);
        //  this.fName.setValue(this.studentToEdit.fName);
        // this.fNumber.setValue(this.studentToEdit.fNumber);
        //  this.mName.setValue(this.studentToEdit.mName)
        // this.mNumber.setValue(this.studentToEdit.mNumber);
        // this.bloodGroup.setValue(this.studentToEdit.bloodGroup);
         this.email.setValue(this.studentToEdit.email);
      
      
      
      }
    }
  
    loadData() {
  
      this.teacherDashboard.getAlldepartments().subscribe(result => {
        this.departments = result;
      });
  
      this.teacherDashboard.getAllcourses().subscribe(result => {
        this.courses = result;
      });
  
      
  
    }
  
    saveStudent() {
  
      this.addStudentForm.markAllAsTouched();
      this.createModel();
      if (this.edit) {
        this.teacherDashboard.editStudent(this.student).subscribe(result => {
  
          this.close();
  
        });;
      }
      else {
        this.teacherDashboard.saveStudent(this.student).subscribe(result => {
  
          this.close();
        });;
      }
    }
  
    close() {
      this.dialogRef.close();
    }
  
    get name() {
      return this.addStudentForm.get("name");
    }
    get dob() {
      return this.addStudentForm.get("dob");
    }
    get address() {
      return this.addStudentForm.get("address");
    }
    // get gender() {
    //   return this.addStudentForm.get("gender");
    // }
    get departmentForm() {
      return this.addStudentForm.get("departmentForm");
    }
  
    get courseForm() {
      return this.addStudentForm.get("courseForm");
    }
    // get fName() {
    //   return this.addStudentForm.get("fName");
    // }
    // get fNumber() {
    //   return this.addStudentForm.get("fNumber");
    // }
    // get mName() {
    //   return this.addStudentForm.get("mName");
    // }
    // get mNumber() {
    //   return this.addStudentForm.get("mNumber");
    // }
    // get bloodGroup() {
    //   return this.addStudentForm.get("bloodgroup");
    // }
    get email() {
      return this.addStudentForm.get("email");
    }

  
    createModel() {
      this.student = new StudentModel();
      this.student.name = this.name.value;
     this.student.dob = this.dob.value;
      this.student.address = this.address.value;
      //  this.student.gender = this.gender.value
      this.student.department = this.departmentForm.value;
       this.student.course = this.courseForm.value;
      // this.student.fName = this.fName.value;
      //  this.student.fNumber = this.fNumber.value;
      //  this.student.mName = this.mName.value;
      //  this.student.mNumber = this.mNumber.value
      //  this.student.bloodGroup = this.bloodGroup.value;
       this.student.email = this.email.value;
      if (this.edit) {
        this.student.id = this.studentToEdit.id;
      }
  
    }
  
  
    compareFn(c1: any, c2: any): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
  
  
  }
  
  

    
