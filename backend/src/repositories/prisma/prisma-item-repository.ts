import { IItem } from '../../entities/Item';
import { IAutogen } from '../../entities/system/Autogen';
import { IForeign } from '../../entities/system/Foreign';
import { prisma } from '../../prisma';
import { IItemRepository } from '../item-repository';

export class PrismaItemRepository implements IItemRepository {
  async create(
    data: Omit<IItem, keyof IAutogen | keyof IForeign>,
  ): Promise<IItem> {
    const item = await prisma.item.create({ data }).catch(() => {
      throw new Error('Erro ao criar item');
    });
    return item;
  }
  async findOne(filter: Partial<Omit<IItem, keyof IForeign>>): Promise<IItem> {
    const item = await prisma.item
      .findFirstOrThrow({ where: filter })
      .catch(() => {
        throw new Error('Erro ao listar item');
      });
    return item;
  }
  async findMany(
    filter?: Partial<Omit<IItem, keyof IForeign>>,
  ): Promise<IItem[]> {
    try {
      const items = filter
        ? await prisma.item.findMany({ where: filter })
        : await prisma.item.findMany();
      return items;
    } catch (err) {
      throw new Error(`Erro ao listar itens : ${err}`);
    }
  }
  async update(
    filter: Partial<Omit<IItem, keyof IForeign>>,
    data: Partial<Omit<IItem, keyof IForeign | keyof IAutogen>>,
  ): Promise<void> {
    await prisma.item.updateMany({ where: filter, data }).catch(() => {
      throw new Error('Erro ao atualizar item');
    });
  }
  async delete(filter: Partial<Omit<IItem, keyof IForeign>>): Promise<void> {
    await prisma.item.deleteMany({ where: filter }).catch(() => {
      throw new Error('Erro ao deletar item');
    });
  }
}
