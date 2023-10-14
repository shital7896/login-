import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
private apiUrl = 'https://example.com/api'; 
private users: any[] = [];

  constructor(private http: HttpClient) { 
    this.loadUsers();
  }
  
  registerUser(userData: any) {
    this.users.push(userData);
    this.saveUsers();
  }

  private loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  
  signup(userData: any): Observable <any> {
   return this.http.post('${this.apiUrl}/register' , userData); 
  }
}
