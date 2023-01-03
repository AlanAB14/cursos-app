import { Component } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public cursos!: Curso[];
  constructor( private cursosService: CursosService ) { }


  ngOnInit(): void {
    this.cursosService.getCursos()
      .subscribe( cursos => {
        this.cursos = cursos;
      })
  }

}
