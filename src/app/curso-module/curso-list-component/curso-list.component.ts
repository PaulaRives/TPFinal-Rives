import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../icurso';
import { CursoService} from '../curso.service'


@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  @Input() cursoLista: ICurso[];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCursos().subscribe(c => this.cursoLista = c);
  }

}
