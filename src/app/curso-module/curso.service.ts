import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, filter} from 'rxjs/operators';
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

  getCurso(id: number){
    return this.http.get<ICurso[]>(this.configUrl).pipe(map(res => res.filter(r => r.id === id)));
  }
}
