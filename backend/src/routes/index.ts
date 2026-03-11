import {Router, Request, Response} from "express";
import gameRoutes from './game.routes';

const router = Router();

router.use('/game', gameRoutes);

router.get('/', (req: Request, res: Response) =>{
    res.send("API működik!");
});

export default router;