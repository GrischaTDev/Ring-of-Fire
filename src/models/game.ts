export class Game {
    public players: string[] = [];
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
    }
}