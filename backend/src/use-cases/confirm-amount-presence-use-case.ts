import { IConfirmPeopeAmountPresencePayload } from '../entities/Item';
import { IUserRepository } from '../repositories/user-repository';

export class ConfirmAmountPresenceUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(payload: IConfirmPeopeAmountPresencePayload) {
    const authUser = await this.userRepository.findOne({ id: payload.authId });
    if (authUser.finishedSubmit == true) {
      throw new Error('Usuário já finalizou o cadastro de informações');
    }
    await this.userRepository.update(
      { id: payload.authId },
      { confirmedAttendance: payload.confirmedAttendance },
    );
  }
}
