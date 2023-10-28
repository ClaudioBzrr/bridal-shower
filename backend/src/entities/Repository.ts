import { IAutogen } from './system/Autogen';
import { IForeign } from './system/Foreign';

export type IRepository<T> = {
  create: (data: Omit<T, keyof IAutogen | keyof IForeign>) => Promise<T>;
  findOne: (filter: Partial<Omit<T, keyof IForeign>>) => Promise<T>;
  findMany: (filter?: Partial<Omit<T, keyof IForeign>>) => Promise<T[]>;
  update: (
    filter: Partial<Omit<T, keyof IForeign>>,
    data: Partial<Omit<T, keyof IAutogen | keyof IForeign>>,
  ) => Promise<void>;
  delete: (filter: Partial<Omit<T, keyof IForeign>>) => Promise<void>;
};
