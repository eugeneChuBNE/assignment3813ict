import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';  // Make sure the path is correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Workplace Chat';
  
  public isAuthenticated: boolean = false;  // New property for tracking authentication
  public userRole: string | null = null;  // New property for tracking the user role

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
}
