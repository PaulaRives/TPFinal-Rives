import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from '../ialumno'
import { AlumnoService } from '../alumno.service'

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  @Input() alumnoLista: Array<IAlumno>;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.getCursos();
  }

  getCursos(): void {
    this.alumnoService.getAlumnos().subscribe(c => this.alumnoLista = c);
  }


}
