import { ISubmitEventPayload } from '../entities/User';
import { IItemRepository } from '../repositories/item-repository';
import { IUserRepository } from '../repositories/user-repository';

export class SubmitEventUseCase {
  constructor(
    private userRepository: IUserRepository,
    private itemRepository: IItemRepository,
  ) {}

  async exec({
    authId,
    confirmedAttendance,
    pickedItems,
  }: ISubmitEventPayload) {
    const authUser = await this.userRepository.findOne({ id: authId });
    if (authUser.finishedSubmit == true) {
      throw new Error('Usuário já finalizou o cadastro ');
    }
    await this.userRepository.update({ id: authId }, { confirmedAttendance });

    pickedItems.map(async (e) => {
      const item = await this.itemRepository.findOne({ id: e });
      if (item.userId == null) {
        await this.itemRepository.update({ id: e }, { userId: authId });
      }
    });

    await this.userRepository.update(
      { id: authUser.id },
      { finishedSubmit: true },
    );
  }
}
