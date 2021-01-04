import { NgModule } from "@angular/core";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {LoginComponent} from './login-component.component';

import {MatRadioModule} from '@angular/material/radio';
import { FileuploadComponent } from '../fileupload/fileupload/fileupload.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  
 
 declarations: [
    LoginComponent
  

   
   
  ],
  imports: [
    
    BrowserModule,
    CommonModule,
   
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
    
   


   
  ],
  providers: [],
 
})

export class LoginModule { }
