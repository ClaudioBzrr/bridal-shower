import { ICreateUserPayload } from '../entities/User';
import { IUserRepository } from '../repositories/user-repository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec(data: ICreateUserPayload) {
    data.email = data.email.toLowerCase();
    const { name, id, email } = await this.userRepository.create(data);
    return { name, email, id };
  }
}
