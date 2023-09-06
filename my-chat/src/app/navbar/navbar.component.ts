import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  public isAuthenticated: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private userService: UserService, private router: Router) {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.isAuthenticated = true;
    }
  }

  ngDoCheck(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    // Trigger change detection explicitly
    this.cdr.detectChanges();
  }

  logout() {
    this.userService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/']); // navigate to home page after logging out
  }
}
