import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.scss']
})
export class CursosPageComponent {

  @Input() cursos!: Curso[];

  cambioTexto( cursos: Curso[] ) {
    this.cursos = cursos;
  }
}
