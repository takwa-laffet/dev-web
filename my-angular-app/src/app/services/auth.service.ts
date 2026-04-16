import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, tap } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private http = inject(HttpClient);
  private url = "http://localhost:3000/users";
  
  // Signal to track auth state
  isOnline = signal<boolean>(false);

  signup(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  login(credentials: any): Observable<boolean> {
    //login logic: check if user exists with given email and password in jdon file
    return this.http.get<any[]>(this.url).pipe(
      map(users=> users.find(user=> user.email === credentials.email && user.password === credentials.password)),
      map(user => {
        if (user) {
          this.isOnline.set(true);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    this.isOnline.set(false);
  }
}