import { CardState } from "../models/CardState";

export class GameService{
    private cards: string[] = ["Dog", "Cat", "Mouse", "Rabbit", "Fox", "Bear", "Panda", "Tiger", "Cow", "Pig", "Frog", "Monkey"];
    private emoji: string[] = ["🐶", "🐱", "🐭", "🐰", "🦊", "🐻", "🐼", "🦁", "🐮", "🐷", "🐸", "🐵"];

    private gameId!: string;
    private playingCards!: CardState[];
    private countDownSeconds!: number;
    private startTime!: number;

    private shuffleCards(numberOfPairs: number): CardState[]{
        let localCards: string[] = this.emoji.slice(12-numberOfPairs);
        console.log(localCards);
        let cards: CardState[] = [];

        while(cards.length != numberOfPairs*2){
            const random = Math.floor(Math.random() * numberOfPairs);
            let selected: string = localCards[random] ?? "";
            if(cards.filter(f => f.card === selected).length < 2){
                let card: CardState = {card: selected, state: false};
                cards.push(card);
            }
        }
        console.log(cards);
        return cards;
    }

    newGame(numberOfPairs: number, countDownSeconds: number): {gameId: string}{
        this.gameId = this.createGameId();
        this.playingCards = this.shuffleCards(numberOfPairs);
        this.countDownSeconds = countDownSeconds;
        this.startTime = Date.now();
        return {gameId: this.gameId};
    }

    processState(card1: number, card2: number, gameId: string): {remainigTime: number, isMatch: boolean}{
        if(gameId != this.gameId) throw Error("Game id dosent match");
        if(this.playingCards[card1]!.card !== this.playingCards[card2]!.card) return {
            remainigTime: this.getRemainingTime(),
            isMatch: false
        };
        this.playingCards[card1]!.state = true;
        this.playingCards[card2]!.state = true;
        return {
            remainigTime: this.getRemainingTime(),
            isMatch: true
        };
    }

    getCard(card: number, gameId: string): CardState{
        if(gameId != this.gameId) throw Error("Game id dosent match");
        return this.playingCards[card]!;
    }

    private createGameId(): string{
        return Math.random().toString(36).substring(2, 10);
    }

    private getRemainingTime(): number{
        const elapsed = Date.now() - this.startTime;
        const remainig = (this.countDownSeconds*1000) - elapsed;
        return Math.max(0, Math.floor(remainig/1000));
    }
}