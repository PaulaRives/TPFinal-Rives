import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { CursoService } from '../../curso-module/curso.service';
import { ICurso } from '../../curso-module/icurso';
import { IAlumno } from '../ialumno';
import { AlumnoService } from '../alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  alumnoForm: FormGroup;
  cursoLista: Array<ICurso>;
  @Output() @Input() alumno: IAlumno;

    // Valida legajo
  legajoValidator(legajo): any {
      if (legajo.pristine) {
         return null;
      }
      const LEG_REGEXP = /^[0-9]{6}[-]{1}[0-9]{2}$/g;
      legajo.markAsTouched();
      if (LEG_REGEXP.test(legajo.value)) {
         delete legajo.errors.invalidLeg;
         return null;
      }
      return {
         invalidLeg: true
      };
  }
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

  get documento() {
    return this.alumnoForm.get('documento')
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

  constructor(fb: FormBuilder, private cursoService: CursoService, private alumnoService: AlumnoService, private route: ActivatedRoute) {
    this.alumnoForm = fb.group({ 
      'nombre': ['', Validators.required], 
      'apellido': ['', Validators.required], 
      'fechaNacimiento': ['', Validators.required], 
      'tipoDocumento': ['', Validators.required], 
      'documento': [{ value: '', disabled: true },  Validators.required],
      'cursos': ['', Validators.required], 
      'comunidad': [false],
      'legajo': [{ value: '', disabled: true }, this.legajoValidator]});
    
    var alumnoDni = this.route.snapshot.params['id'];

    if(alumnoDni) {
      this.alumnoService.getAlumnno(alumnoDni).subscribe(a => {
        this.alumno = a[0];
        if(this.alumno) {
          this.nombre.setValue(this.alumno.nombre);
          this.apellido.setValue(this.alumno.apellido);
          this.fechaNacimiento.setValue(this.alumno.fechaNacimiento);
          this.tipoDocumento.setValue(this.alumno.tipoDocumento);
          this.documento.setValue(this.alumno.documento);
          this.cursos.setValue(this.alumno.cursos);
          this.comunidad.setValue(this.alumno.comunidad);
          this.legajo.setValue(this.alumno.legajo);
        }
      })
    } 
    this.tipoDocumento.valueChanges.subscribe((value) => {
      if (value === "0") 
        this.documento.enable();
      else 
        this.documento.disable();
    });

    this.comunidad.valueChanges.subscribe((value) => {
      if (value) 
        this.legajo.enable();
      else 
        this.legajo.disable();
    });
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(c => this.cursoLista = c);
  }


  onSubmit($value) {
    //console.log($value);
    this.alumno = <IAlumno>$value;
  this.alumnoService.postAlumno(this.alumno).subscribe(a => console.log(a));
  }

}
