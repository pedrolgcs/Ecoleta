import { Router, Request, Response } from 'express';

import pointsRouter from '@modules/points/infra/http/routes/points.routes';

// Inicialize
const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello Rocket' });
});

routes.use('/points', pointsRouter);

export default routes;
