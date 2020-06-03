import 'reflect-metadata';

import express, { json, Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

app.listen(3333, () => console.log('🚀 => server running in: localhost:3333'));
