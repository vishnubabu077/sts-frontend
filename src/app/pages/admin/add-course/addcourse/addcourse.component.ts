import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseModel } from 'src/app/dto/course.data';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  public courses: any;
  addCourseForm : FormGroup;
  public course: CourseModel;
  public edit: boolean = false;
  public courseToEdit: CourseModel;


  constructor(private adminService: AdminService,
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddcourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data, "edit course")
    if (this.data !== undefined && this.data !== null) {
      this.edit = this.data.edit;
      this.courseToEdit = this.data.courses;
    }

    this.loadData();
    this.buildForm();
  }

  buildForm() {
    this.addCourseForm = this.formBuilder.group(
      {
      
        courseForm: ["", Validators.required],
        
      }
    )
    if (this.edit) {
      
      this.courseForm.setValue(this.courseToEdit.course);
      
    }
  }
  loadData() {

    this.adminService.getAllCourses().subscribe(result => {
      this.courses = result;
    });

  }
  saveCourse() {

    this.addCourseForm.markAllAsTouched();
    if (this.addCourseForm.valid) {
    this.createModel();
    if (this.edit) {
      this.adminService.editCourse(this.course).subscribe(result => {
        this.close();
     });; 
    }  
    else {
      this.adminService.saveCourse(this.course).subscribe(result => {
  });;
    }
    this.close();
  }
  }

  close()
  {
    this.dialogRef.close(); 
  }

  get courseForm() {
    return this.addCourseForm.get("courseForm");
  }
  createModel() {
    this.course= new CourseModel();
    this.course.course = this.courseForm.value;
    if (this.edit) {
      this.course.id = this.courseToEdit.id;
    }
}

}
