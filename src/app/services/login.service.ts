import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/enviremonent'
import { Observable, catchError, throwError } from 'rxjs';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.BASE_URL;

  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilsService
  ) { }

  login(user: any): Observable<any> {
    console.log(user);
    
    return this.httpClient.post<any>(`${this.url}/auth/user`, user)
    .pipe(
      catchError((err) => {
        if(err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente!')
        } else if(err.status === 404) {
          this.utilsService.showError(err.error.message)
        } else {
          this.utilsService.showError('Ocorreu um erro no servidor, tente mais tarde!')
        }
        return throwError(() => err)
      })
  )}

}
