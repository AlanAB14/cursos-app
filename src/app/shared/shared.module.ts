import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SharedModule { }
