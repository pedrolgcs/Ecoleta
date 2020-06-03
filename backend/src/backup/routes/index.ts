import { Router } from 'express';

// Routes
import itemsRouter from './items.routes';
import pointsRouter from './points.routes';

const routes = Router();

routes.use('/items', itemsRouter);
routes.use('/points', pointsRouter);

export default routes;
