import { Component } from '@angular/core';
import { IAlumno } from './ialumno';
import { IDocente } from './idocente';
import { ICurso } from './icurso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facultad-app';
  alumno = alumno;
  curso = curso;
  docente = docente;
}

var docente = <IDocente>{nombre: 'Fernando', 
                        apellido: 'Arias'};
var curso = <ICurso> { 
                        nombre:'Desarrolo Web con Angular',
                        horas: 24, 
                        precio: 3000,
                        docente: docente ,
                        inicio: '10/09/2018',
                        fin: '19/11/2018',
                        estado: 'pendiente'
                      };
var alumno = <IAlumno>{nombre: 'Paula',
                      apellido: 'Rives', 
                      cursos: [curso], };


