import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any> {
    console.log(environment.apiUrl)
    return this.http.get(environment.apiUrl);
  }

}
