import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, filter, count, catchError} from 'rxjs/operators';
import { IAlumno } from './ialumno';
import { timer, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  getUrl = 'https://demo3744158.mockable.io/alumnos';
  postPutDeleteUrl = 'https://demo3744158.mockable.io/alumno';


  constructor(private http: HttpClient) {
  }

  private obtenerNombreCompleto(alumnos: IAlumno[]): IAlumno[] {
    alumnos.forEach(a => a._nombreCompleto = a.nombre + ' ' + a.apellido)
    return alumnos;
  }

  // GET alumnos
  private getAllAlumnos(): Observable<IAlumno[]> {
    return this.http.get<IAlumno[]>(this.getUrl);
  }

  // obtiene todos los alumnos y crea la propedad nombre y apellido
  getAlumnosNombreCompleto() : Observable<IAlumno[]> {
    return this.getAllAlumnos().pipe(map(r => this.obtenerNombreCompleto(r)));
  }

  // ontiene todos los alumnos y filtra segun curso
  getAlumnosSegunCurso(cursoId: number) : Observable<IAlumno[]>  {
    return this.getAlumnosNombreCompleto().pipe(map(r => r.filter(r => r.cursos.find(c => c == cursoId))));
  }

  // obtiene un alumno segun dni
  getAlumnno(alumnoId: string) :Observable<IAlumno[]> {
    return this.getAllAlumnos().pipe(map(res => res.filter(r => r.documento === alumnoId)));
  }

  // POST alumno
  postAlumno(alumno) : Observable<any> { 
      return this.http.post<IAlumno>(this.postPutDeleteUrl, alumno).pipe(catchError(error => of(`Bad Promise: ${error}`)));
  }

  // PUT alumno
  putAlumno(alumno) : Observable<any> { 
    return this.http.put<IAlumno>(this.postPutDeleteUrl, alumno).pipe(catchError(error => of(`Bad Promise: ${error}`)));
  }

  // DELETE alumno
  deleteAlumno(alumno): Observable<any>  {
    return this.http.delete(this.postPutDeleteUrl, alumno ).pipe(catchError(error => of(`Bad Promise: ${error}`)));
  }
}



