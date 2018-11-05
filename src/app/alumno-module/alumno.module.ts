import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { CursoModule } from '../curso-module/curso.module';
import { SharedModule } from '../shared-module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    CursoModule,
    SharedModule
  ],
  declarations: [AlumnoFormComponent]
})
export class AlumnoModule { }
