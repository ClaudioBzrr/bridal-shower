import { Request, Response } from 'express';
import { CreateItemUSeCase } from '../use-cases/create-item-use-case';
import { PrismaUserRepository } from '../repositories/prisma/prisma-user-repository';
import { PrismaItemRepository } from '../repositories/prisma/prisma-item-repository';
import {
  ICreateItemPayload,
  IListAllItemsPayload,
  IPickItemPayload,
} from '../entities/Item';
import { ListItemsUseCase } from '../use-cases/list-items-use-case';
import { PickItemUseCase } from '../use-cases/pick-item-use-case';
import { ListAllItemsUseCase } from '../use-cases/list-all-items-use-case';

const userRepository = new PrismaUserRepository();
const itemRepository = new PrismaItemRepository();

export class ItemController {
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
      return response.status(404).json(String(err));
    }
  }
  async find(request: Request, response: Response) {
    try {
      const listItemsUseCase = new ListItemsUseCase(itemRepository);
      const items = await listItemsUseCase.exec();
      return response.json(items);
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
  async pick(request: Request, response: Response) {
    try {
      const pickItemUseCAse = new PickItemUseCase(itemRepository);
      const payload: IPickItemPayload = request.body;
      const item = await pickItemUseCAse.exec(payload);
      return response.json(item);
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
  async findAll(request: Request, response: Response) {
    try {
      const payload: IListAllItemsPayload = request.body;
      const listAllItemsUseCase = new ListAllItemsUseCase(
        itemRepository,
        userRepository,
      );
      const items = await listAllItemsUseCase.execute(payload);
      return response.json(items);
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
}
