import { Component, OnInit, Input, Output } from '@angular/core';
import { IAlumno } from '../ialumno';



@Component({
  selector: 'app-alumno-list-item',
  templateUrl: './alumno-list-item.component.html',
  styleUrls: ['./alumno-list-item.component.css']
})
export class AlumnoListItemComponent implements OnInit {

  @Input() alumno: IAlumno;


  constructor() { }

  ngOnInit() {
  }
}
