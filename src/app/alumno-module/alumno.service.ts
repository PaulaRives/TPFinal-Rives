import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, filter, count } from 'rxjs/operators';
import { IAlumno } from './ialumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  configUrl = 'https://demo3744158.mockable.io/alumnos';

  constructor(private http: HttpClient) {
  }

  private getAllAlumnos(): Observable<IAlumno[]> {
    return this.http.get<IAlumno[]>(this.configUrl);
  }


  getAlumnos(): Observable<IAlumno[]> {
    return this.getAllAlumnos();
  }

  getAlumnosTotal(): Observable<number> {
    return this.getAllAlumnos().pipe(count());
  }
}



