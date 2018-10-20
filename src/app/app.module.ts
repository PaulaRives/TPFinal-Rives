import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { CursoComponent } from './curso-module/curso-component/curso.component';
import { CursoListComponent } from './curso-module/curso-list-component/curso-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    DocenteComponent,
    CursoComponent,
    CursoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
