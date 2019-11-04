import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string = 'Alert';

  constructor(public alertController: AlertController) {

  }

  ngOnInit() {

  }

  async alertaBasica() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Subtitulo de alerta',
      message: 'Texto largo mostrado en la alerta',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado',blah);
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('OK');
          }
        }
      ]
    });

    await alert.present();

  }

  async alertaInput() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Hola, Cual es tu nombre?',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Escribe tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado',blah);
          }
        }, {
          text: 'OK',
          handler: (datosInput) => {
            if (datosInput.Nombre)
            {
              this.titulo = datosInput.Nombre;
            }
            else
            {
              this.titulo = 'Alert';
            }           
          }
        }
      ]
    });

    await alert.present();

  }







}
