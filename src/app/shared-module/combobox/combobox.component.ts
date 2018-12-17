import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit {

  @Input() itemsLista: Array<any>;
  @Output() cambioItemSeleccionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambioSeleccion(event) :void{
    this.cambioItemSeleccionado.emit(event.target.value);
  }

}
