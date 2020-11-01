import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';


const routes: Routes = [
  { path: '',redirectTo:"/teacherdashboard", pathMatch:'full' },
  { path: 'admin', component: AdminComponent },
 { path: 'teacherdashboard', component:TeacherDashboardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



