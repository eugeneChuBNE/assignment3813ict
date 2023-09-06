import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';  // Make sure the path is correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Workplace Chat';

  // Existing properties for tracking authentication and user role
  public isAuthenticated: boolean = false;
  public userRole: string | null = null;

  // New properties for login form
  public username: string = '';
  public password: string = '';

  constructor(private userService: UserService) {  // Inject the UserService
    // Initialize the default users via UserService
    this.userService.initializeUsers();
  }

  ngOnInit(): void {
    // Get the current user
    const currentUser = this.userService.getCurrentUser();  

    // Check if the user is authenticated
    if (currentUser) {
      this.isAuthenticated = true;
      this.userRole = currentUser.role;
    }
  }

  // method to handle login
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
