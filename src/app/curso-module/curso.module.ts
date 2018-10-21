import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from './curso-component/curso.component';
import { CursoListComponent } from './curso-list-component/curso-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: 'curso/id', component: CursoComponent},
  {path: 'cursos', component: CursoListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    CursoComponent,
    CursoListComponent
  ],
  exports: [RouterModule] 

})
export class CursoModule { }
