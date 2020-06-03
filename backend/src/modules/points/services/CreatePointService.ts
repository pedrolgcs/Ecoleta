import { injectable, inject } from 'tsyringe';

// @shared
// import AppError from '@shared/errors/AppError';

// Entities
import Point from '../infra/typeorm/entities/Point';

// Interfaces
import IPointsRepository from '../repositories/IPointsRepository';

interface IRequest {
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
}

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(pointData: IRequest): Promise<Point> {
    const point = await this.pointsRepository.create(pointData);

    return point;
  }
}

export default CreatePointService;
