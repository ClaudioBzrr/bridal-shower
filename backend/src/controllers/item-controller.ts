import { Request, Response } from 'express';
import { CreateItemUSeCase } from '../use-cases/create-item-use-case';
import { PrismaUserRepository } from '../repositories/prisma/prisma-user-repository';
import { PrismaItemRepository } from '../repositories/prisma/prisma-item-repository';
import { ICreateItemPayload, IPickItemPayload } from '../entities/Item';
import { ListItemsUseCase } from '../use-cases/list-items-use-case';
import { PickItemUseCase } from '../use-cases/pick-item-use-case';

const userRepository = new PrismaUserRepository();
const itemRepository = new PrismaItemRepository();

export class IItemController {
  async create(request: Request, response: Response) {
    try {
      const createItemUseCase = new CreateItemUSeCase(
        itemRepository,
        userRepository,
      );
      const payload: ICreateItemPayload = request.body;
      const item = await createItemUseCase.exec(payload);
      return response.json(item);
    } catch (err) {
      return response.status(404).json(err);
    }
  }
  async find(request: Request, response: Response) {
    try {
      const listItemsUseCase = new ListItemsUseCase(itemRepository);
      const items = listItemsUseCase.exec();
      return response.json(items);
    } catch (err) {
      return response.status(404).json(err);
    }
  }
  async pick(request: Request, response: Response) {
    try {
      const pickItemUseCAse = new PickItemUseCase(itemRepository);
      const payload: IPickItemPayload = request.body;
      const item = await pickItemUseCAse.exec(payload);
      return response.json(item);
    } catch (err) {
      return response.status(404).json(err);
    }
  }
}
