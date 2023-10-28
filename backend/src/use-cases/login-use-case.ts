import { ILoginPayload } from '../entities/User';
import { IUserRepository } from '../repositories/user-repository';

export class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec(payload: ILoginPayload) {
    const user = await this.userRepository.findOne({ email: payload.email });
    return { id: user.id, name: user.name, email: user.email };
  }
}
