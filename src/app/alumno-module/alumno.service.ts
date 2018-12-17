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

  private obtenerNombreCompleto(alumnos: IAlumno[]): IAlumno[] {
    alumnos.forEach(a => a._nombreCompleto = a.nombre + ' ' + a.apellido)
    return alumnos;
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

  getAlumnosNombreCompleto() : Observable<IAlumno[]> {
    return this.getAllAlumnos().pipe(map(r => this.obtenerNombreCompleto(r)));
  }

  getAlumnosSegunCurso(cursoId: number) : Observable<IAlumno[]>  {
    return this.getAlumnosNombreCompleto().pipe(map(r => r.filter(r => r.cursos.find(c => c == cursoId))));
  }
}



