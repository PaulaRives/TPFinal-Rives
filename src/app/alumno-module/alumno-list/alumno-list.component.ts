import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from '../ialumno'
import { AlumnoService } from '../alumno.service'
import { CursoService } from '../../curso-module/curso.service'
import { ICurso } from '../../curso-module/icurso';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  @Input() alumnoLista: Array<IAlumno>;
  @Input() filtroCursos: Array<ICurso>;
  alumnosTotal: number;

  constructor(private alumnoService: AlumnoService, private cursoService: CursoService) { }

  ngOnInit() {
    this.getAlumnos();
    this.getCursoFiltro();
    this.getAlumnosTotal();
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnosNombreCompleto().subscribe(c => this.alumnoLista = c);
  }

  getCursoFiltro(): void {
    this.cursoService.getCursos().subscribe(a => this.filtroCursos = a);
  }

  getAlumnosTotal(): void {
    this.alumnoService.getAlumnos().subscribe(n => this.alumnosTotal = n.length);
  }

  filtrarAlumnosPorCurso(value): void {
    if(!value)
      this.getAlumnos();
    else
      this.alumnoService.getAlumnosSegunCurso(value).subscribe(a => this.alumnoLista = a);
  }

  filtrarAlumnosPorPantalla(value: string): void {
    if(value.length > 0) {
      this.alumnoService.getAlumnosNombreCompleto().subscribe(a => {
        this.alumnoLista = a.filter(i => i._nombreCompleto.toLowerCase().includes(value.toLowerCase())); 
      });
    }
    else {
      this.getAlumnos();
    }
  };

  borrarAlumnoYActualizar(alumno) {
    this.alumnoService.deleteAlumno(alumno).subscribe(a => {
      console.log(a);
      this.getAlumnosTotal();
      this.getAlumnos();
    })

  }
}
