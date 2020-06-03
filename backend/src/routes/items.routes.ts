import { Router } from 'express';

// Controllers
import ItemsController from '../controllers/ItemsController';

// Inicialize
const itemsRouter = Router();
const itemsController = new ItemsController();

itemsRouter.get('/', itemsController.index);

export default itemsRouter;
