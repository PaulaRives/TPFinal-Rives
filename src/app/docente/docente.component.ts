import { Component, OnInit, Input } from '@angular/core';
import { IDocente } from '../idocente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  @Input() docente: IDocente;

  constructor() { }

  ngOnInit() {
  }

}
