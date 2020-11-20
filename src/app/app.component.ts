import { Component } from '@angular/core';
import { Players } from './models/Players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerFootball: Players[] = [
    { id: 1, name: 'Roberto Perfumo', posicion: 'defensor' },
    { id: 2, name: 'Alfio Basile', posicion: 'defensor' },
    { id: 3, name: 'Humberto Maschio', posicion: 'defensor' }
  ];

  selectedPlayer: Players = new Players(); /* Va a comenzar dando un jugador en blanco */

  openForEdit(player: Players): void {
    this.selectedPlayer = player;
  }
  agregarOEditarJugador(): void {
    if (this.selectedPlayer.id === 0) {
      this.selectedPlayer.id = this.playerFootball.length + 1;
      this.playerFootball.push(this.selectedPlayer);
    }
    this.selectedPlayer = new Players();
  }

  delete(): void {
    if (confirm('Quieres Eliminarlo')) {
      this.playerFootball = this.playerFootball.filter(x => x !== this.selectedPlayer);
      this.selectedPlayer = new Players();
    }
  }
}
