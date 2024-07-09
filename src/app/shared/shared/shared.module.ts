import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionService } from 'src/app/services/region.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[RegionService]
})
export class SharedModule { }
