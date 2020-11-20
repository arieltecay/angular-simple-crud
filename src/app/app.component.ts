import { Component } from '@angular/core';
import { Players  } from './models/Players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerFootball: Players[] = [
    {id: 1, name: 'Roberto Perfumo', posicion: 'defensor'},
    {id: 2, name: 'Alfio Basile', posicion: 'defensor'},
    {id: 3, name: 'Humberto Maschio', posicion: 'defensor'}
  ];
}
