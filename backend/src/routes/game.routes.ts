import { Router, Request, Response } from "express";
import { GameController } from "../controllers/gameController";

const router = Router();
const controller = new GameController();

router.get('/', (req: Request, res: Response) => {
    res.send("/game endpoint működik");
});

router.get('/card/:id', controller.getCard.bind(controller));
router.post('/state', controller.processState.bind(controller));
router.post('/', controller.newGame.bind(controller));

export default router;