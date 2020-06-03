import { Request, Response } from 'express';
import { container } from 'tsyringe';

// Services
import CreatePointService from '@modules/points/services/CreatePointService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createPoint = container.resolve(CreatePointService);

    const point = await createPoint.execute(request.body);

    return response.status(201).json(point);
  }
}

export default UsersController;
