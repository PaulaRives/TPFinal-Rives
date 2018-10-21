import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  constructor(private http: HttpClient) { 
    
  }

  configUrl = 'cursos.json';

  getCursos() {
    return this.http.get(this.configUrl);
  };
}
