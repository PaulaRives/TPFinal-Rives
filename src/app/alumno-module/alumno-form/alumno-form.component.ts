import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { CursoService } from '../../curso-module/curso.service';
import { ICurso } from '../../curso-module/icurso';
import { IAlumno } from '../ialumno';
import { AlumnoService } from '../alumno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoDocumento } from 'src/app/shared-module/tipo-documento.enum';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  alumnoForm: FormGroup;
  cursoLista: Array<ICurso>;
  modoedicion: boolean = false;

  @Output() alumno: IAlumno;

  /*******  PROPIERDADES DE LOS CONTROLES  ******/
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

  get valorCuota() {
    return this.alumnoForm.get('valorCuota')
  }

  tipoDocumentoLista = this.getENUM(TipoDocumento);

  getENUM(ENUM:any): string[] {
    let myEnum = [];
    let values = Object.keys(ENUM);
  

    for (let i = 0 ; i < values.length ; i++ ) {
      myEnum.push( { text: values[i], value: i } ); 
    }
    return myEnum;
  }
  

  constructor(fb: FormBuilder, private cursoService: CursoService, private alumnoService: AlumnoService, private route: ActivatedRoute, private router: Router) {
    // crear form group vacio
    this.alumnoForm = fb.group({ 
      'nombre': ['', Validators.required], 
      'apellido': ['', Validators.required], 
      'fechaNacimiento': ['', Validators.required], 
      'tipoDocumento': ['', Validators.required], 
      'documento': [{ value: '', disabled: true },  Validators.required],
      'cursos': ['', Validators.required], 
      'comunidad': [false],
      'legajo': [{ value: '', disabled: true }, this.legajoValidator],
      'valorCuota': [{ value: '0', disabled: true }]});
    
    //obtener parametro de la ruta si es que existe
    var alumnoDni = this.route.snapshot.params['id'];

    // si la ruta tiene el parametro id es porque esramos viendo un alumno en especifico
    if(alumnoDni) {
      // ontener alumno setear valores del form com el objeto alumno
      this.alumnoService.getAlumnno(alumnoDni).subscribe(a => {
        this.modoedicion = true;
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
          this.valorCuota.setValue(this.alumno._valorCuota) ;
        }
      })
    } 

    // si es dni se habilita el control para poner el numero
    this.tipoDocumento.valueChanges.subscribe((value) => {
      if (value === "0") 
        this.documento.enable();
      else 
        this.documento.disable();
    });

    // si es comunidad se habilita el legajo y se calcula descuento si es que hay cursos seleccionados
    this.comunidad.valueChanges.subscribe((value) => {
      if (value) 
        this.legajo.enable();
      else 
        this.legajo.disable();
      this.calcularValorCuota(this.cursos.value);
    });

    // se calcula monto de cuota si se cambian los cursos seleciconadoa
    this.cursos.valueChanges.subscribe((value => {
      this.calcularValorCuota(value);
    }))
  }

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

  // calcula monto de cuota
  calcularValorCuota(value: Array<number>) {
    var total: number = 0; 
    if (value.length) {
      value.forEach(element => {
        var c = this.cursoLista.find(c => c.id == element);
        total += c.precio;
      });
    }
    if(this.comunidad.value == true) {
      total = total - total * 0.25;
    }
    this.valorCuota.setValue(total);
  }

  ngOnInit() {
    // se obtiene listado de cursos para cargar dropdown y calcular cuota
    this.cursoService.getCursos().subscribe(c => this.cursoLista = c);
  }

  // navega hacia la lista de alumnos
  gotoAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  onSubmit($value) {
    // se agignan los valores del form al alumno
    this.alumno = <IAlumno>$value;
    if(!this.modoedicion) {
      this.alumnoService.postAlumno(this.alumno).subscribe(a => {
        this.gotoAlumnos();
        // log respose
        console.log("Resultado de POST" + a);
      });
    }
    else {
      this.alumnoService.putAlumno(this.alumno).subscribe(a => {
        this.gotoAlumnos();
        // log respose
        console.log("Resultado de PUT" + a);
      });
    }
   
  }

}
