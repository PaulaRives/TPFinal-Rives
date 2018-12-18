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

  
  private getAllAlumnos(): Observable<IAlumno[]> {
    return this.http.get<IAlumno[]>(this.getUrl);
  }


  getAlumnos(): Observable<IAlumno[]> {
    return this.getAllAlumnos();
  }

  getAlumnosNombreCompleto() : Observable<IAlumno[]> {
    return this.getAlumnos().pipe(map(r => this.obtenerNombreCompleto(r)));
  }

  getAlumnosSegunCurso(cursoId: number) : Observable<IAlumno[]>  {
    return this.getAlumnosNombreCompleto().pipe(map(r => r.filter(r => r.cursos.find(c => c == cursoId))));
  }

  getAlumnno(alumnoId: string) :Observable<IAlumno[]> {
    return this.getAlumnos().pipe(map(res => res.filter(r => r.documento === alumnoId)));
  }

  postAlumno(alumno) : Observable<any> { {
      return this.http.post<IAlumno>(this.postPutDeleteUrl, alumno)
      .pipe(catchError(error => of(`Bad Promise: ${error}`)))
    }
  }

  deleteAlumno(alumno): Observable<any>  {
    return this.http.delete(this.postPutDeleteUrl, alumno )
      .pipe(
        catchError(error => of(`Bad Promise: ${error}`))
      );
  }
}



