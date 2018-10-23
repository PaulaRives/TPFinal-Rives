import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso-component/curso.component';
import { CursoListComponent } from './curso-list-component/curso-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CursoListItemComponent } from './curso-list-item/curso-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    CursoComponent,
    CursoListComponent,
    CursoListItemComponent
  ]

})
export class CursoModule { }
