import { Component } from '@angular/core';
import { IAlumno } from './ialumno';
import { IDocente } from './idocente';
import { ICurso } from './curso-module/icurso';
import { Estado } from './curso-module/estado.enum';

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

  public cambiarEstadoCurso (value): void {
    this.curso.estado = <Estado>value;
  }                   
      
}

var docente = <IDocente>{nombre: 'Fernando', 
                        apellido: 'Arias'};
var curso = <ICurso>{id: 22,
                      titulo: "Angular",
                      fechaInicio: 1551657600000,
                      fechaFin: 1549238400000,
                      asistentes: [
                          "Jimena Sanchez",
                          "Joaquín Ferreyra",
                          "Adolfo Carrasco",
                          "Juan Ignacio López",
                          "Nadia de Rosa"
                      ],
                      profesor: [
                          "Fernando Arias"
                      ],
                      laboratorio: 7,
                      estado: <Estado>0} ;
                      
var alumno = <IAlumno>{nombre: 'Paula',
                      apellido: 'Rives', 
                      cursos: [curso], };

