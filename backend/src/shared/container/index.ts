import { container } from 'tsyringe';

// Point Repository
import IPointsRepository from '@modules/points/repositories/IPointsRepository';
import PointsRepository from '@modules/points/infra/typeorm/repositories/PointsRepository';

container.registerSingleton<IPointsRepository>(
  'PointsRepository',
  PointsRepository,
);
