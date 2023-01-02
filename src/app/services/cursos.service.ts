import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor( private http: HttpClient) { }

  getCursos() {
    return this.http.get<Curso[]>('./assets/data.json')
  }
}
