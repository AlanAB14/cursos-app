import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from '../../interfaces/curso.interface';

@Component({
  selector: 'app-informacion-page',
  templateUrl: './informacion-page.component.html',
  styleUrls: ['./informacion-page.component.scss']
})
export class InformacionPageComponent implements OnInit{
  public cursosRealizados!: number;
  public tiempoEmpleado!: number;
  public progressBar: boolean = true;

  constructor( private cursosService: CursosService ) { }

  ngOnInit(): void {
    this.cursosService.calculaCursosyTiempo()
      .subscribe( resp => {
        this.progressBar = false;
        this.cursosRealizados = resp.cursos;
        this.tiempoEmpleado = resp.tiempoEmpleado;
      })
  }
}
