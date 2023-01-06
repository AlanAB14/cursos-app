import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent {
  @Input() public titulo: string = '';
  @Input() public autor: string = '';
  @Input() public imagen: string = '';
  @Input() public avatar: string = '';
  @Input() public descripcion: string = '';
  @Input() public url: string = '';
  @Input() public horas: number = 0;



}
