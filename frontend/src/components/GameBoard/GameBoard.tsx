import './GameBoard.css';
import Card from '../Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

type CardType = {
    flipped: boolean;
    face: string;
};

type CardResponse = {
    card: string;
    state: boolean;
};

function GameBoard({settings, resetTrigger, onMatch, onMistake}: {
    settings: {pairs: number, seconds: number};
    resetTrigger: number;
    onMatch: (value: number) => void;
    onMistake: (value: number) => void;
}){
    const [selected, setSelected] = useState<number[]>([]);
    const [isLocked, setIsLocked] = useState(false);
    const [cards, setCards] = useState<CardType[]>([]);
    const [matches, setMatches] = useState(0);
    const [mistakes, setMistakes] = useState(0);

    useEffect(() => {
        onMatch(matches);
        onMistake(mistakes);
    }, [matches, mistakes]);

    useEffect(() => {
        const numberOfCards = settings.pairs*2;
        const newCards = Array.from({length: numberOfCards}, () => ({
            flipped: false,
            face: ""
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCards(newCards);
        async function newGame() {
            const response = await axios.post("http://localhost:3000/api/game", {
                seconds: settings.seconds,
                pairs: settings.pairs
            });
            const result: {gameId: string} = response.data;
            localStorage.setItem("gameId", result.gameId);
        }
        newGame();
        setMatches(0);
        setMistakes(0);
    }, [resetTrigger, settings]);

    async function checkMatch(selectedCards: number[]){
        setIsLocked(true);
        const[i1, i2] = selectedCards;

        const response = await axios.post("http://localhost:3000/api/game/state", {
            card1: i1,
            card2: i2,
            gameId: localStorage.getItem("gameId")
        })
        const result: {remainingTime: number, isMatch: boolean} = response.data;
        if(!result.isMatch){
            setTimeout(() => {
                setCards((prev) => {
                    const newCards = [...prev];
                    newCards[i1] = {flipped: false, face: ""};
                    newCards[i2] = {flipped: false, face: ""};
                    return newCards;
                });
                setSelected([]);
                setIsLocked(false);
            }, 1000);
            setMistakes(mistakes+1);
        }else{
            setSelected([]);
            setIsLocked(false);
            setMatches(matches+1);
        }
    }

    async function flipCard(index: number){
        if(isLocked) return;
        const current = cards[index];
        if(current.flipped) return;
        const response = await axios.get(`http://localhost:3000/api/game/card/${index}`, {
            params: {
                gameId: localStorage.getItem("gameId")
            }
        });
        const result: CardResponse = response.data;
        const newSelected = [...selected, index];
        setCards((prev) => {
            const newCards = [...prev];
            newCards[index] = {
                flipped: true,
                face: result.card
            };
            return newCards;
        });
        setSelected(newSelected);
        if(newSelected.length === 2) checkMatch(newSelected);
    }

    return (
        <div id='container'>
            {cards.map((card, i) => (
                <Card
                    key={i}
                    flipped={card.flipped}
                    face={card.face}
                    onClick={() => flipCard(i)}
                />
            ))}
        </div>
    )
}

export default GameBoard