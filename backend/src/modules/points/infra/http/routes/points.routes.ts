import { Router } from 'express';

// Controllers
import PointsController from '../controllers/PointsController';

// Inicialize
const userRouter = Router();
const pointsController = new PointsController();

userRouter.post('/', pointsController.create);

export default userRouter;
