import { Request, Response } from 'express';
import knex from '../database/connection';

interface IItem {
  id: string;
  image: string;
  title: string;
  image_url?: string;
}

class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item: IItem) => ({
      ...item,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }));

    return response.status(200).json(serializedItems);
  }
}

export default ItemsController;
