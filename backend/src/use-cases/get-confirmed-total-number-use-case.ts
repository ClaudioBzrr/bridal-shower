import { IGetConfirmedNumberPayload } from '../entities/Item';
import { IItemRepository } from '../repositories/item-repository';
import { IUserRepository } from '../repositories/user-repository';

export class GetConfirmedTotalNumberUseCase {
  constructor(
    private itemRepository: IItemRepository,
    private userRepository: IUserRepository,
  ) {}
  async exec(payload: IGetConfirmedNumberPayload) {
    const authUser = await this.userRepository.findOne({ id: payload.authId });
    if (authUser.role != 'admin') {
      throw new Error('Usuário sem permissão para realizar consulta');
    }
    const totalNumber = (await this.itemRepository.findMany()).filter(
      (f) => f.userId != null,
    ).length;

    return { totalConfirmed: totalNumber };
  }
}
