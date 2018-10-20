import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../icurso';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  @Input() cursoLista: Array<ICurso>

  constructor() { }

  ngOnInit() {
  }

}
