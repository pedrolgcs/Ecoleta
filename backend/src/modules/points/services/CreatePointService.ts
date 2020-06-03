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
  latitude?: string;
  longitude?: string;
  city: string;
  uf: string;
}

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Point> {
    const point = await this.pointsRepository.create(data);

    return point;
  }
}

export default CreatePointService;
