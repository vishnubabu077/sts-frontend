import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from './library/token.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'schooling-at-home';
  private roles: string[];
  isLoggedIn = false;
  adminDashboard = false;
  teacherDashboard = false;
  studentDashboard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,  private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.adminDashboard=false;
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.adminDashboard = this.roles.includes('ROLE_ADMIN');
      this.teacherDashboard = this.roles.includes('ROLE_TEACHER');
      this.studentDashboard = this.roles.includes('ROLE_STUDENT');

      this.username = user.username;
      if(this.adminDashboard){
        this.router.navigate(['/admin']);
      }
      if(this.teacherDashboard){
        this.router.navigate(['/teacherdashboard']);
      }
      if(this.studentDashboard){
        this.router.navigate(['/studentDashboard']);
      }
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
  

