export class Game {
    public players: string[] = ['Junus', 'Manuel', 'Grischa'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 0; i < 13; i++) {
            this.stack.push('Clovers_' + i)
            this.stack.push('Hearts_' + i)
            this.stack.push('Pikes_' + i)
            this.stack.push('Tiles_' + i)
        }

        this.shuffleStack();
    }

    shuffleStack() {
        for (let i = this.stack.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
        }
    }
}