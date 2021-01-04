import { NgModule } from "@angular/core";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTabGroup} from '@angular/material/tabs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import {MatRadioModule} from '@angular/material/radio';
import { FileuploadComponent } from '../fileupload/fileupload/fileupload.component';
import { StudentdashboardComponent } from "../studentdashboard/studentdashboard.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  
 
 declarations: [
  
   StudentdashboardComponent
   
   
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
    MatIconModule,MatToolbarModule,MatRadioModule,
  
   

   
  ],
  providers: [],
 
})

export class StudentDashBoardModule { }
