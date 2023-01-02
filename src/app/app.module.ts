import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { InformacionPageComponent } from './pages/informacion-page/informacion-page.component';
import { SharedModule } from './shared/shared.module';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosPageComponent,
    InformacionPageComponent,
    CardCursoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
