import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { LoginComponent } from './pages/login-component/login-component.component';
import { StudentdashboardComponent } from './pages/studentdashboard/studentdashboard.component';


const routes: Routes = [
  { path: '',redirectTo:"/login", pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
 { path: 'teacherdashboard', component:TeacherDashboardComponent },
 { path: 'studentDashboard', component:StudentdashboardComponent },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



