import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public _cantidadCursos!: number;
  public _tiempoEmpleado: number = 0;

  constructor( private http: HttpClient ) { }


  getCursos() {
    return this.http.get<Curso[]>('./assets/data.json')
  }

  calculaCursosyTiempo() {
    return this.getCursos()
              .pipe(
                map( cursos => {
                  this.sumaTiempo( cursos )
                  return {cursos: cursos.length, tiempoEmpleado: this._tiempoEmpleado}
                })
              )
  }

  sumaTiempo( cursos: Curso[] ) {
    cursos.forEach( curso => {
      this._tiempoEmpleado = this._tiempoEmpleado + curso.horas;
      return this._tiempoEmpleado;
    })
  }

  getCursoFromQuery( query: string ) {
    return this.getCursos()
            .pipe(
              map( (cursos)  => {
                return cursos.filter( curso => curso.titulo.toLocaleLowerCase().includes( query.toLocaleLowerCase() ))
              })
            )
  }
}
