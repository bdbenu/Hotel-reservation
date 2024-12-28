import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseUrl ="http://localhost:8181/studentrest/students";
  constructor(private http: HttpClient) { 

    
  }

  getAllStudents(): Observable<Student[]>{
return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  registerStudent(student :Student): Observable<Object>{
return this.http.post('http://localhost:8181/studentrest/create',student);
  }
}
