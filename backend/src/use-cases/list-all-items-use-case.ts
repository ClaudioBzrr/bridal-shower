import { IListAllItemsPayload } from '../entities/Item';
import { IItemRepository } from '../repositories/item-repository';
import { IUserRepository } from '../repositories/user-repository';

export class ListAllItemsUseCase {
  constructor(
    private itemRepository: IItemRepository,
    private userRepository: IUserRepository,
  ) {}
  async execute(payload: IListAllItemsPayload) {
    const authUser = await this.userRepository.findOne({ id: payload.authId });
    if (authUser.role != 'admin') {
      throw new Error('Erro ao listar itens selecinados');
    }
    const items = await this.itemRepository.findMany();
    return items;
  }
}
