import path from 'path';
import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import AppError from './utils/errors/AppError';

import routes from './routes';

const app = express();

// Middlewares
app.use(json());
app.use(cors());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Routes
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

app.listen(3333, () => {
  console.log('🚀 server started on port 3333');
});
