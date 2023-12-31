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
        { username: '', password: '', role: 'super_admin', groups: [] },
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

  // Get current user
  getCurrentUser(): any | null {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  // Add new user
  addUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Login
  login(username: string, password: string): boolean {
  console.log('Attempting to log in:', username, password); 
  const users = this.getUsers();
  console.log('Available users:', users);  
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    console.log('User found:', user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  } else {
    console.log('User not found');  // Log when a user is not found
  }
  return false;
}

  // Logout
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  // Check role of a user
  checkRole(username: string): string | null {
    const users = this.getUsers();
    const user = users.find(u => u.username === username);
    return user ? user.role : null;
  }
}
