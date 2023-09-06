import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // Initialize users if they don't exist
  initializeUsers(): void {
    if (!localStorage.getItem('users')) {
      const users = [
        { username: 'test_sp', password: '123', role: 'super_admin', groups: [] },
        { username: 'test_ga', password: '123', role: 'group_admin', groups: [] },
        { username: 'test_user', password: '123', role: 'user', groups: [] }
      ];
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  // Get all users
  getUsers(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  // Add new user
  addUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Check role of a user
  checkRole(username: string): string | null {
    const users = this.getUsers();
    const user = users.find(u => u.username === username);
    return user ? user.role : null;
  }

  // Your additional methods to handle user functionalities can go here
}
