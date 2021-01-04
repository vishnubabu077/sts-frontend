
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminModule } from './pages/admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { TeacherDashModule } from './pages/teacher-dashboard/teacherDash.module';
import {MatRadioModule} from '@angular/material/radio';

import { ProfileComponent } from './pages/profile/profile.component';
import { LoginModule } from './pages/login-component/login.module';
import { authInterceptorProviders } from './library/auth.interceptor';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentdashboardComponent } from './pages/studentdashboard/studentdashboard.component';

import {StudentDashBoardModule  } from './pages/studentdashboard/student.module';



@NgModule({
  declarations: [
    AppComponent,

  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,MatTabsModule,
    MatDialogModule,
    AdminModule,MatGridListModule,TeacherDashModule,MatRadioModule,LoginModule,MatButtonModule,MatToolbarModule,
    StudentDashBoardModule
    
   
   

    
  ],
 
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]

})
export class AppModule { }
