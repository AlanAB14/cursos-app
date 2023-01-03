import { Component, EventEmitter, Output } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from '../../interfaces/curso.interface';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']

})
export class SearchbarComponent {

  public cursos!: Curso[];

  @Output() onEnter: EventEmitter<Curso[]> = new EventEmitter();


  constructor( private cursosService: CursosService ) { }

  buscarCursos( query: string ) {

    this.cursosService.getCursoFromQuery(query)
      .subscribe( cursos => {
        this.cursos = cursos;
        this.onEnter.emit(this.cursos);
      })
  }

}
