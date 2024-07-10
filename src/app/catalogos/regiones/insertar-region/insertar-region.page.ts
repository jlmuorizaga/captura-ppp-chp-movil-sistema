import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, 
  IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-insertar-region',
  templateUrl: './insertar-region.page.html',
  styleUrls: ['./insertar-region.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonButtons, 
    IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule]
})
export class InsertarRegionPage implements OnInit {
formularioPersona: any;

  constructor() { }

  ngOnInit() {
  }
insertarRegion(){

}
}
