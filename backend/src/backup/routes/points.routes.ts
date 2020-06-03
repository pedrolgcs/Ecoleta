import { Router } from 'express';

// Controllers
import PointsController from '../controllers/PointsController';

// Inicialize
const pointsRouter = Router();
const pointsController = new PointsController();

pointsRouter.get('/', pointsController.index);
pointsRouter.post('/', pointsController.create);
pointsRouter.get('/:id', pointsController.show);

export default pointsRouter;
