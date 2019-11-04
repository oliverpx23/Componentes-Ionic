import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alertas',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'square',
      name: 'Botones',
      redirecTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecTo: '/cards'
    },
    {
      icon: 'calendar',
      name: 'Fecha y Hora',
      redirecTo: '/date-time'
    },
    {
      icon: 'add-circle',
      name: 'Boton Flotante (fab)',
      redirecTo: '/fab'
    },
    {
      icon: 'apps',
      name: 'Grid - Row - Col',
      redirecTo: '/grid'
    },
    {
      icon: 'git-compare',
      name: 'Scroll Infinito',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Inputs',
      redirecTo: '/inputs'
    },
    {
      icon: 'list-box',
      name: 'Inputs',
      redirecTo: '/inputs'
    },
  ];


  constructor() {

  }

  ngOnInit() {

  }

}


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}