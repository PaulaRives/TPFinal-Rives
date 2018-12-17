import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { CursoService } from '../../curso-module/curso.service';
import { ICurso } from '../../curso-module/icurso';
import { IAlumno } from '../ialumno';
@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  alumnoForm: FormGroup;
  cursoLista: Array<ICurso>;
  @Output() alumno: IAlumno;

  get nombre() {
    return this.alumnoForm.get('nombre')
  }

  get apellido() {
    return this.alumnoForm.get('apellido')
  }

  get fechaNacimiento() {
    return this.alumnoForm.get('fechaNacimiento')
  }

  get tipoDocumento() {
    return this.alumnoForm.get('tipoDocumento')
  }

  get numeroDocumento() {
    return this.alumnoForm.get('numeroDocumento')
  }

  get cursos() {
    return this.alumnoForm.get('cursos')
  }

  get comunidad() {
    return this.alumnoForm.get('comunidad')
  }

  get legajo() {
    return this.alumnoForm.get('legajo')
  }

  constructor(fb: FormBuilder, private cursoService: CursoService) {
    this.alumnoForm = fb.group({ 'nombre': ['', Validators.required], 'apellido': ['', Validators.required], 
    'fechaNacimiento': ['', Validators.required], 'tipoDocumento': ['', Validators.required], 
    'numeroDocumento': [{ value: '', disabled: true },  Validators.required],'cursos': ['', Validators.required], 'comunidad': [false],
     'legajo': [{ value: '', disabled: true }]});

   this.tipoDocumento.valueChanges.subscribe((value) => {
      if (value === "DNI") {
        this.numeroDocumento.enable();
      }
      else {
        this.numeroDocumento.disable();
      }

    });

    this.comunidad.valueChanges.subscribe((value) => {
      if (value) {
        this.legajo.enable();
      }
      else {
        this.legajo.disable();
      }

    });
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(c => this.cursoLista = c);
  }

  onSubmit($value) {
    console.log($value);
    this.alumno = <IAlumno>$value;
    console.log(this.alumno);
  }

}
