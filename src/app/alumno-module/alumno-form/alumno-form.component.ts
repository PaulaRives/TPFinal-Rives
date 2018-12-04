import { Component, OnInit, Output } from '@angular/core';
import { IAlumno } from '../ialumno';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  @Output() alumno: IAlumno;

  constructor() { }

  ngOnInit() {
  }

}
