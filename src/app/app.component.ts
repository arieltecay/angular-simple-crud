import { Component } from '@angular/core';
import { Players } from './models/Players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerFootball: Players[] = [
    { id: 1, name: 'Luis Carrizo', posicion: 'Arquero' },
    { id: 2, name: 'Roberto Perfumo', posicion: 'Defensor' },
    { id: 3, name: 'Alfio Basile', posicion: 'Defensor' },
    { id: 4, name: 'Oscar Martin', posicion: 'Defensor' },
    { id: 5, name: 'Juan Carlos Rulli', posicion: 'Mediocampista' },
    { id: 6, name: 'Nelson Chabay', posicion: 'Defensor' },
    { id: 7, name: 'Juan Carlos Cardenas', posicion: 'Lateral Izquierdo' },
    { id: 8, name: 'Rúben Díaz', posicion: 'Lateral Derecho' },
    { id: 9, name: 'Juan José Rodríguez', posicion: 'Delantero' },
    { id: 10, name: 'Humberto Maschio', posicion: 'Delantero' },
    { id: 11, name: 'Néstor Rambert', posicion: 'Delantero' },
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
