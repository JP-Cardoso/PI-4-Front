import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/enviremonent'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.BASE_URL;

  constructor(
    private httpClient: HttpClient
  ) { }

  login(user: any): Observable<any> {
    console.log(user);
    
    return this.httpClient.post<any>(`${this.url}/auth/user`, user)
  }
}
