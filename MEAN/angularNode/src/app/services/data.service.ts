import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // global
})
export class DataService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000';

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  add(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
