import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlumno } from '../ialumno';



@Component({
  selector: 'app-alumno-list-item',
  templateUrl: './alumno-list-item.component.html',
  styleUrls: ['./alumno-list-item.component.css']
})
export class AlumnoListItemComponent implements OnInit {

  @Input() alumno: IAlumno;
  @Output() borrarAlumno= new EventEmitter;


  constructor() { }

  clickMethod(alumno: IAlumno) {
    if(confirm("¿Seguro que desea borrar a "+alumno._nombreCompleto+"?")) {
      console.log("Implement delete functionality here");
      this.borrarAlumno.emit(alumno);
    }
  }

  ngOnInit() {
  }
}
