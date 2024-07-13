import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, 
  IonItem, IonLabel, IonButton,AlertController } from '@ionic/angular/standalone';
  import { SharedModule } from 'src/app/shared/shared/shared.module';
  import { Especialidad } from 'src/app/model/dto/especialidad';
  import { EspecialidadService } from 'src/app/services/especialidad.service';
  import { Router } from '@angular/router';
@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
  standalone: true,
  imports: [SharedModule,IonButton, IonLabel, IonItem, IonList, IonBackButton, IonButtons, 
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EspecialidadesPage implements OnInit {
  especialidades!:Especialidad[];
  mensaje:string;

  constructor(private especialidadesSvc:EspecialidadService,
    private alertController:AlertController,
    private router: Router,private cdr: ChangeDetectorRef ) { 
      this.mensaje='Estoy en el constructor';
    }

  ngOnInit() {
    this.leerEspecialidades();
  }
  leerEspecialidades(){
    this.especialidadesSvc.dameListaEspecialidades().subscribe({
      next:(res:any)=>{
        console.log('Servicio leido de forma exitosa')
        console.log(res);
        this.especialidades=res;
        this.cdr.detectChanges();

      },
      error:(error:any)=>{
        console.log('Error en la lectura del servicio')
        console.log(error)

      }
    })
  }

  borraEspecialidad(id:string){
    console.log('Voy a borrar esta especialidad='+id);

    this.especialidadesSvc.borraEspecialidad(id).subscribe({
      next:(res:any)=>{
        console.log('Especialidad borrada de forma exitosa')
        console.log(res);
        this.leerEspecialidades();
        

      },
      error:(error:any)=>{
        console.log('Error en el borrado de la especialidad')
        console.log(error)

      }
    })

  }
  async confirmaBorrar(especialidad:Especialidad){
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas borrar la especialidad '+especialidad.nombre+' ?',
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
            this.borraEspecialidad(especialidad.id);
            // Aquí puedes agregar la lógica para la operación a realizar
          }
        }
      ]
    });

    await alert.present();

  }

}
