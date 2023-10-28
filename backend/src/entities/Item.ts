import { IUser } from './User';
import { IAutogen } from './system/Autogen';

export type IItem = IAutogen & {
  name: string;
  userId: string;
  user: IUser;
};
