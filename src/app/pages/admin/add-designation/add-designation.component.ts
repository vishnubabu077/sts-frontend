import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DesignationModel } from 'src/app/dto/designation.data';
import { AdminService } from '../admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  public designations: any;
  addDesignationForm: FormGroup;
  public designation: DesignationModel;
  public edit: boolean = false;
  public designationToEdit: DesignationModel;


  constructor(private adminService: AdminService,
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddDesignationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data, "edit designation")
    if (this.data !== undefined && this.data !== null) {
      this.edit = this.data.edit;
      this.designationToEdit = this.data.designations;
    }

    this.loadData();

    this.buildForm();
  }

  buildForm() {
    this.addDesignationForm = this.formBuilder.group(
      {

        designationForm: ["", Validators.required],

      }
    )
    if (this.edit) {

      this.designationForm.setValue(this.designationToEdit.designation);

    }
  }
  loadData() {

    this.adminService.getAlldesignations().subscribe(result => {
      this.designations = result;
    });

  }
  saveDesignation() {
    this.addDesignationForm.markAllAsTouched();
    if (this.addDesignationForm.valid) {
      this.createModel();

      if (this.edit) {
        this.adminService.editDesignation(this.designation).subscribe(result => {
          this.close();
        });;
      }
      else {
        this.adminService.saveDesignation(this.designation).subscribe(result => {
          this.close();
        });;
      }
    }

  }


  close() {

    this.dialogRef.close();
  }
  get designationForm() {
    return this.addDesignationForm.get("designationForm");
  }
  createModel() {
    this.designation = new DesignationModel();
    this.designation.designation = this.designationForm.value;
    if (this.edit) {
      this.designation.id = this.designationToEdit.id;
    }
  }

}
