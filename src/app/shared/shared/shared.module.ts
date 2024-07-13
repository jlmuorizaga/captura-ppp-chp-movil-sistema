import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionService } from 'src/app/services/region.service';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadService } from 'src/app/services/especialidad.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[RegionService,EspecialidadService]
})
export class SharedModule { }
