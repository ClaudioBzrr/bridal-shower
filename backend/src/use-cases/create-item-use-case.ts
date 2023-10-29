import { ICreateItemPayload } from '../entities/Item';
import { IItemRepository } from '../repositories/item-repository';
import { IUserRepository } from '../repositories/user-repository';

export class CreateItemUSeCase {
  constructor(
    private itemRepository: IItemRepository,
    private userRepository: IUserRepository,
  ) {}
  async exec(payload: ICreateItemPayload) {
    const authUser = await this.userRepository.findOne({ id: payload.authId });
    if (authUser.role != 'admin') {
      throw new Error('Usuário sem permissão para criar item');
    }
    const item = await this.itemRepository.create(payload.data);
    return item;
  }
}
