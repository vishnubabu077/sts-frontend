
 import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTabGroup} from '@angular/material/tabs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AddcourseComponent } from './add-course/addcourse/addcourse.component';
@NgModule({
  
 
 
 declarations: [
    
    AdminComponent,  AddTeacherComponent,AddDepartmentComponent,AddDesignationComponent,AddcourseComponent
   
   
  ],
  imports: [
    
    BrowserModule,
    CommonModule,
  
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule
  
   

   
  ],
  providers: [],
 
})

export class AdminModule { }
