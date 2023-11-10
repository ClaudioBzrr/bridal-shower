import { ICreateAdminPayload } from '../entities/User';
import { IUserRepository } from '../repositories/user-repository';

export class CreateAdminUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec({ authId, payload }: ICreateAdminPayload) {
    payload.email = payload.email.toLowerCase();
    const totalAdminUsers = (
      await this.userRepository.findMany({ role: 'admin' })
    ).length;
    if (totalAdminUsers == 0) {
      const { id } = await this.userRepository.create(payload);
      return { id };
    } else {
      const authUser = await this.userRepository.findOne({ id: authId! });
      if (authUser.role != 'admin') {
        throw new Error(
          'Usuário sem permissão para criar novos Administradores',
        );
      }
      const { id } = await this.userRepository.create(payload);
      return { id };
    }
  }
}
