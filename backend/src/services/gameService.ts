export class GameService{
    private cards: string[] = ["Dog", "Cat", "Mouse", "Rabbit", "Fox", "Bear", "Panda", "Tiger", "Cow", "Pig", "Frog", "Monkey"];

    private shuffleCards(numberOfPairs: number): string[]{
        let cards: string[] = [];

        while(cards.length == numberOfPairs*2){
            const random = Math.floor(Math.random() * 13);
            let selected: string = this.cards[random] ?? "";
            if(cards.filter(f => f === selected).length <= 2){
                cards.push(selected);
            }
        }

        return cards;
    }
}