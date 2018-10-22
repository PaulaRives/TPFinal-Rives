import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from '../curso-module/curso-component/curso.component';
import { CursoListComponent } from '../curso-module/curso-list-component/curso-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CursoModule } from '../curso-module/curso.module';

const ROUTES: Routes = [
  { path: 'curso/:id', component: CursoComponent },
  { path: 'cursos', component: CursoListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
