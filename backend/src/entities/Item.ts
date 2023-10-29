import { IUser } from './User';
import { IAutogen } from './system/Autogen';

export type IItem = IAutogen & {
  name: string;
  userId?: string | null;
  user?: IUser;
};

export type IPickItemPayload = { itemId: IItem['id'][]; userId: IUser['id'] };
