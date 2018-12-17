import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DocenteComponent } from './docente/docente.component';
import { RoutingModule } from './routing-module/routing.module';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { CursoModule } from './curso-module/curso.module'
import { AlumnoModule } from './alumno-module/alumno.module'

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    MenuComponentComponent,
  ],
  imports: [
    CursoModule,
    BrowserModule,
    RoutingModule,
    AlumnoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
