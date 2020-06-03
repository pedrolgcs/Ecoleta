import { getRepository, Repository } from 'typeorm';

// Interface
import IPointsRepository from '@modules/points/repositories/IPointsRepository';
import ICreatePointDTO from '@modules/points/dtos/ICreatePointDTO';

import Point from '../entities/Point';

class PointsRepository implements IPointsRepository {
  private ormRepository: Repository<Point>;

  constructor() {
    this.ormRepository = getRepository(Point);
  }

  public async create(pointData: ICreatePointDTO): Promise<Point> {
    const point = await this.ormRepository.create(pointData);
    await this.ormRepository.save(point);
    return point;
  }
}

export default PointsRepository;
