import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {

  textoBusqueda: string;
  @Output() buscarEnLista = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buscar(): void{
    this.buscarEnLista.emit(this.textoBusqueda);
  }
}
