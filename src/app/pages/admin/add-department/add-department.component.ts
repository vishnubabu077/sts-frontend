import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentModel } from 'src/app/dto/department.data';
import { AdminService } from '../admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  providers: []
})
export class AddDepartmentComponent implements OnInit {
  public departments: any;
  addDepartmentForm : FormGroup
  public department: DepartmentModel;
  public edit: boolean = false;
  public departmentToEdit: DepartmentModel;

  constructor(private adminService: AdminService,
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    console.log(this.data, "edit department")
    if (this.data !== undefined && this.data !== null) {
      this.edit = this.data.edit;
      this.departmentToEdit = this.data.departments;
    }

    this.loadData();
    this.buildForm();
  }

  buildForm() {
    this.addDepartmentForm = this.formBuilder.group(
      {
      
        departmentForm: ["", Validators.required],
        
      }
    )
    if (this.edit) {
      
      this.departmentForm.setValue(this.departmentToEdit.department);
      
    }
  }
  loadData() {

    this.adminService.getAlldepartments().subscribe(result => {
      this.departments = result;
    });

  }
  saveDepartment() {

    this.addDepartmentForm.markAllAsTouched();
    if (this.addDepartmentForm.valid) {
    this.createModel();
    if (this.edit) {
      this.adminService.editDepartment(this.department).subscribe(result => {
        this.close();
     });; 
    }  
    else {
      this.adminService.saveDepartment(this.department).subscribe(result => {
  });;
    }
    this.close();
  }
  }

  close()
  {
    this.dialogRef.close(); 
  }

  get departmentForm() {
    return this.addDepartmentForm.get("departmentForm");
  }
  createModel() {
    this.department= new DepartmentModel();
    this.department.department = this.departmentForm.value;
    if (this.edit) {
      this.department.id = this.departmentToEdit.id;
    }
}
}
