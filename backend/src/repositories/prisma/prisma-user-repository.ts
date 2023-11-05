import { IUser } from '../../entities/User';
import { IAutogen } from '../../entities/system/Autogen';
import { IForeign } from '../../entities/system/Foreign';
import { prisma } from '../../prisma';
import { IUserRepository } from '../user-repository';

export class PrismaUserRepository implements IUserRepository {
  async create(
    data: Omit<IUser, keyof IAutogen | keyof IForeign>,
  ): Promise<IUser> {
    const user = await prisma.user.create({ data }).catch(() => {
      throw new Error(`Erro ao criar usuário`);
    });
    return user;
  }
  async findOne(filter: Partial<Omit<IUser, keyof IForeign>>): Promise<IUser> {
    const user = await prisma.user
      .findFirstOrThrow({ where: filter })
      .catch(() => {
        throw new Error('Erro ao listar usuário');
      });
    return user;
  }
  async findMany(
    filter?: Partial<Omit<IUser, keyof IForeign>>,
  ): Promise<IUser[]> {
    try {
      const users = filter
        ? await prisma.user.findMany({ where: filter })
        : await prisma.user.findMany();
      return users;
    } catch (err) {
      throw new Error(`Erro ao listar usuários ${err}`);
    }
  }
  async update(
    filter: Partial<Omit<IUser, keyof IForeign>>,
    data: Partial<Omit<IUser, keyof IForeign | keyof IAutogen>>,
  ): Promise<void> {
    await prisma.user.updateMany({ where: filter, data }).catch(() => {
      throw new Error('Erro ao atualizar informações de usuário');
    });
  }
  async delete(filter: Partial<Omit<IUser, keyof IForeign>>): Promise<void> {
    await prisma.user.deleteMany({ where: filter }).catch(() => {
      throw new Error('Erro ao deletar usuário');
    });
  }
}
