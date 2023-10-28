import { ICreateUserPayload } from '../entities/User';
import { IUserRepository } from '../repositories/user-repository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec(data: ICreateUserPayload) {
    const user = await this.userRepository.create(data);
    return { name: user.id, email: user.email, id: user.id };
  }
}
