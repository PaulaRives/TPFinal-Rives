import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoListItemComponent } from './alumno-list-item-component/alumno-list-item.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { CursoModule } from '../curso-module/curso.module';
import { SharedModule } from '../shared-module/shared.module';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoEditComponent } from './alumno-edit/alumno-edit.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    CursoModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],

  declarations: [AlumnoFormComponent, AlumnoListComponent, AlumnoListItemComponent, AlumnoEditComponent]
})
export class AlumnoModule { }
