import { Request, Response } from "express";
import { GameService } from "../services/gameService";
import { CardState } from "../models/CardState";

export class GameController{
    private service = new GameService();
    
    getCard(req: Request<{id: string}, {}, {}, {gameId: string}>, res: Response){
        const id = Number(req.params.id);
        const {gameId} = req.query;
        if(typeof gameId !== "string") return res.status(400).json({error: "Invalid gameId"});
        const card: CardState = this.service.getCard(id, gameId);
        res.json(card);
    }

    processState(req: Request, res: Response){
        const {card1, card2, gameId} = req.body;
        const state: {remainigTime: number, isMatch: boolean} = this.service.processState(card1, card2, gameId);
        res.json(state);
    }

    newGame(req: Request, res: Response){
        const {seconds, pairs} = req.body;
        const gameid: {gameId: string} = this.service.newGame(pairs, seconds);
        res.json(gameid);
    }
}