import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionService } from 'src/app/services/region.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[RegionService,EspecialidadService]
})
export class SharedModule { }
