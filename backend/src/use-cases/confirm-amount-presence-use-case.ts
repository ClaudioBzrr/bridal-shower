import { IConfirmPeopeAmountPresencePayload } from '../entities/Item';
import { IUserRepository } from '../repositories/user-repository';

export class ConfirmAmountPresenceUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(payload: IConfirmPeopeAmountPresencePayload) {
    await this.userRepository.update(
      { id: payload.authId },
      { confirmedAttendance: payload.confirmedAttendance },
    );
  }
}
