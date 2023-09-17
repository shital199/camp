import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private baseUrl = 'http://localhost:3000'; // Adjust the port if needed

  constructor(private http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

}
