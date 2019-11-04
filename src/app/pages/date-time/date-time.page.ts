import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNac: Date = new Date();

  customPickerOptions: any;

  customDate: Date;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: (evento: any) => {
          console.log('Guardar!');
          console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Log, al retornar falso no se cierra');
          return false;
        }
      }]
    }

  }

  CambiaFecha(e: any) {
    console.log('ion change', e);
  }

}
