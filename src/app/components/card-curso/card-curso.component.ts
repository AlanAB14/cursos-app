import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent {
  @Input() public titulo: string = 'Nuevo curso';
  @Input() public autor: string = 'Fernando Herrera';
  @Input() public imagen: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() public avatar: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() public descripcion: string = 'asdasdasdasd';
  @Input() public url: string = 'asdas';
  @Input() public horas: number = 50;



}
