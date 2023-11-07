import { IPickItemPayload } from '../entities/Item';
import { IItemRepository } from '../repositories/item-repository';
import { IUserRepository } from '../repositories/user-repository';

export class PickItemUseCase {
  constructor(
    private itemRepository: IItemRepository,
    private userRepository: IUserRepository,
  ) {}

  async exec(payload: IPickItemPayload) {
    const authUser = await this.userRepository.findOne({ id: payload.authId });
    if (authUser.finishedSubmit == true) {
      throw new Error('Usuário já finalizou o cadastro de informações');
    }
    payload.itemId.map(async (e) => {
      const item = await this.itemRepository.findOne({ id: e });
      if (item.userId == null) {
        await this.itemRepository.update({ id: e }, { userId: payload.authId });
      }
    });
    await this.userRepository.update(
      { id: authUser.id },
      { finishedSubmit: true },
    );
  }
}
