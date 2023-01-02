import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.scss']
})
export class CursosPageComponent {

  public cursos!: Curso[];

  constructor( private cursosService: CursosService ) { }


  ngOnInit(): void {
    this.cursosService.getCursos()
      .subscribe( cursos => {
        this.cursos = cursos;
      })
  }


}
