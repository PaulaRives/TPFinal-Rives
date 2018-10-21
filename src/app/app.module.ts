import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';

import { MenuComponentComponent } from './menu-component/menu-component.component';
import { CursoModule } from './curso-module/curso.module'


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    DocenteComponent,
    MenuComponentComponent
  ],
  imports: [
    CursoModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
