import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ICurso } from '../icurso';
import { Estado } from '../estado.enum';
import { CursoService} from '../curso.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



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

  constructor(private cursoService: CursoService, 
    private route: ActivatedRoute,
    private location: Location) { 
    this.cambiarEstadoCursoEvent = new EventEmitter();
  }

  ngOnInit() {
    this.getCurso();
  }

  getCurso(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cursoService.getCurso(id)
      .subscribe(curso => this.curso = curso[0]);
  }

  public cambiarEstado(event): void {
    this.curso.estado = <Estado>event.target.value;
    //this.cambiarEstadoCursoEvent.emit(event.target.value);
    if(event.target.value == "1"){
      this.isActive = true;
      this.isInactive = false;
    }
    else if (event.target.value == "2"){
      this.isActive = false;
      this.isInactive = true;
    }
    else {
      this.isActive = false;
      this.isInactive = false;
    }
  }
}
