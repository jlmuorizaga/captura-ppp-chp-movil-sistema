import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular'
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule }
  from '@angular/forms';
import {IonHeader, IonButton, IonInput,IonToolbar,IonTitle,IonButtons,IonBackButton,IonGrid,IonRow,IonCol} from '@ionic/angular/standalone'
import { Region } from 'src/app/model/dto/region';
import { RegionService } from 'src/app/services/region.service';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@Component({
  selector: 'app-insertar-region',
  templateUrl: './insertar-region.page.html',
  styleUrls: ['./insertar-region.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule, CommonModule, 
    IonHeader, IonButton, IonInput,IonToolbar,IonTitle,IonButtons,IonBackButton,IonGrid,IonRow,IonCol,SharedModule
  ]
})
export class InsertarRegionPage  {
  formularioRegion: FormGroup;

  constructor(private fb: FormBuilder,private regionesSvc:RegionService,private router: Router) {
    this.formularioRegion = this.fb.group({
      idRegion: ['', Validators.required],
      nombreRegion: ['', Validators.required]
    })
  }

  

  insertaRegion() {
    if (this.formularioRegion.valid) {
      console.log(this.formularioRegion.value)
      let region:Region=new Region();
      region.idRegion=this.formularioRegion.value.idRegion;
      region.nombreRegion=this.formularioRegion.value.nombreRegion;
      this.regionesSvc.insertaRegion(region).subscribe({
        next:(res:any)=>{
          console.log('Región insertada de forma exitosa')
          console.log(res);
          this.saltaARegiones();
  
        },
        error:(error:any)=>{
          console.log('Error en la inserción de la región')
          console.log(error)
  
        }
      })

    }

  }
  saltaARegiones() {
    this.router.navigateByUrl('/regiones');
  }  
}
