import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { UserService } from './services/user.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Workplace Chat';

  // Existing properties for tracking authentication and user role
  public isAuthenticated: boolean = false;
  public userRole: string | null = null;

  //  properties for login form
  public username: string = '';
  public password: string = '';

  constructor(private cdr: ChangeDetectorRef, private userService: UserService) {
    // Initialize the default users via UserService
    this.userService.initializeUsers();
  }

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.isAuthenticated = true;
      this.userRole = currentUser.role;
    }
  }

  ngDoCheck(): void {
    // Check for authentication and role changes during each change detection cycle
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.isAuthenticated = true;
      this.userRole = currentUser.role;
    } else {
      this.isAuthenticated = false;
      this.userRole = null;
    }
    // Trigger change detection explicitly
    this.cdr.detectChanges();
  }

  //  method to handle login
  onLogin(): void {
    console.log('Logging in with', this.username, this.password); // Debug line
    if (this.userService.login(this.username, this.password)) {
      this.isAuthenticated = true;
      this.userRole = this.userService.checkRole(this.username);
    } else {
      alert('Invalid username or password.');
    }
  }
}
