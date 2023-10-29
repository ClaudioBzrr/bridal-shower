import { IPickItemPayload } from '../entities/Item';
import { IItemRepository } from '../repositories/item-repository';

export class PickItemUseCase {
  constructor(private itemRepository: IItemRepository) {}

  async exec(payload: IPickItemPayload) {
    payload.itemId.map(async (e) => {
      const item = await this.itemRepository.findOne({ id: e });
      if (item.userId == null) {
        await this.itemRepository.update({ id: e }, { userId: payload.userId });
      }
    });
  }
}
