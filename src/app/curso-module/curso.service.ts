import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';
import { ICurso } from './icurso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) {

  }

  configUrl = 'https://demo3744158.mockable.io/cursos';

  private getAllCursos(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>(this.configUrl);
  }


  getCursos(): Observable<ICurso[]> {
    return this.getAllCursos();
  }

  getCurso(id: number) {
    return this.getAllCursos().pipe(map(res => res.filter(r => r.id === id)));
  }
}
