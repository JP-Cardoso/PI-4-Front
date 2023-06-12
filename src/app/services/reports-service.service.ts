import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/enviremonent'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {
  
  url:string = environment.BASE_URL;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getReportsAnalitic(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/report-analitic`)
    .pipe()
  };

  getReports(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/reports`)
    .pipe()
  }
}
