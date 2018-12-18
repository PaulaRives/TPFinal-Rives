import { Component, OnInit } from '@angular/core';

import { AlumnoService } from '../alumno.service'
import { IAlumno } from '../ialumno';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {

  alumno: IAlumno;

  constructor() { }


  ngOnInit() {
    
  }

  
}
