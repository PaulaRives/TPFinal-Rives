import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { ICurso } from './icurso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { 
    
  }

  configUrl = 'cursos.json';


  getCursos() {
    return this.http.get<ICurso[]>(this.configUrl).pipe(map(res => res));;
  } 

  getCurso(id: number): Observable<ICurso> {
    const url = 'cursos.json/' + id;
    return this.http.get<ICurso>(url)
  }
}
