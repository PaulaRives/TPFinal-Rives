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

  constructor(private alumnoService: AlumnoService, private cursoService: CursoService) { }

  ngOnInit() {
    this.getAlumnos();
    this.getCursoFiltro();
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnosNombreCompleto().subscribe(c => this.alumnoLista = c);
  }

  getCursoFiltro(): void {
    this.cursoService.getCursos().subscribe(a => this.filtroCursos = a);
  }

  filtrarAlumnosPorCurso(value): void {
    if(!value)
      this.getAlumnos();
    else
      this.alumnoService.getAlumnosSegunCurso(value).subscribe(a => this.alumnoLista = a);
  }


}
