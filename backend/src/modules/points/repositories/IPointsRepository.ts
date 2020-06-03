import Point from '../infra/typeorm/entities/Point';

// Interface
import ICreatePointDTO from '../dtos/ICreatePointDTO';

export default interface IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point>;
  listAll(): Promise<Point[]>;
}
