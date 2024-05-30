import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() ?? '';
      this.game.playedCards.push(this.currentCard);
      console.log(this.currentCard);
      console.log(this.game.playedCards, 'Gespielte Karten');
      this.pickCardAnimation = true;
  
  
      setTimeout(()=> {
        this.pickCardAnimation = false;
      }, 1500)
    }
  }
}
