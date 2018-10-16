import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ICurso } from '../icurso';
import { Estado } from '../estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  @Output() cambiarEstadoCursoEvent: EventEmitter<string>;
  @HostBinding('class.isActive') isActive: boolean;
  @HostBinding('class.isInactive') isInactive: boolean;
  constructor() { 
    this.cambiarEstadoCursoEvent = new EventEmitter();

  }

  ngOnInit() {
  }

  public cambiarEstado(event): void {
    this.cambiarEstadoCursoEvent.emit(event.target.value);
    if(event.target.value == "Activo"){
      this.isActive = true;
      this.isInactive = false;
    }
    else if (event.target.value == "Inactivo"){
      this.isActive = false;
      this.isInactive = true;
    }
    else {
      this.isActive = false;
      this.isInactive = false;
    }
  }
}
