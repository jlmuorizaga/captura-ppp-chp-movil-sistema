import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
   IonButton, IonIcon, IonBackButton, IonList, 
  IonLabel, IonItem, 
  AlertController} from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { Region } from 'src/app/model/dto/region';
import { RegionService } from 'src/app/services/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.page.html',
  styleUrls: ['./regiones.page.scss'],
  standalone: true,
  imports: [SharedModule,IonItem, IonLabel, IonList, 
    IonBackButton, IonIcon, IonButton, IonButtons, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegionesPage implements OnInit {
  regiones!:Region[];
  mensaje: string;

  constructor(private regionesSvc:RegionService,
    private alertController:AlertController,
    private router: Router,private cdr: ChangeDetectorRef ) { 
      this.mensaje = 'Estoy en el constructor';
    }

  ngOnInit() {
    this.leerRegiones();
  }

  leerRegiones(){
    this.regionesSvc.dameListaRegiones().subscribe({
      next:(res:any)=>{
        console.log('Servicio leido de forma exitosa')
        console.log(res);
        this.regiones=res;
        this.cdr.detectChanges();

      },
      error:(error:any)=>{
        console.log('Error en la lectura del servicio')
        console.log(error)

      }
    })
  }
  borraRegion(id:string){
    console.log('Voy a borrar esta región='+id);

    this.regionesSvc.borraRegion(id).subscribe({
      next:(res:any)=>{
        console.log('Región borrada de forma exitosa')
        console.log(res);
        this.leerRegiones();
        

      },
      error:(error:any)=>{
        console.log('Error en el borrado de la región')
        console.log(error)

      }
    })

  }
  async confirmaBorrar(region:Region){
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas borrar la región '+region.nombre+' ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operación cancelada');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Operación confirmada');
            this.borraRegion(region.id);
            // Aquí puedes agregar la lógica para la operación a realizar
          }
        }
      ]
    });

    await alert.present();

  }

  saltaAInsertarRegion() {
    this.router.navigateByUrl('/insertar-region');
  }  
}
