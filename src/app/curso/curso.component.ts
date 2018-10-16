import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICurso } from '../icurso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  @Output() cambiarEstadoCursoEvent: EventEmitter<string>;

  constructor() { 
    this.cambiarEstadoCursoEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  public cambiarEstado(event): void {
    this.cambiarEstadoCursoEvent.emit(event.target.value);
  }

}
