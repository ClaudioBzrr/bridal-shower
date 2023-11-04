import { IUser } from './User';
import { IAutogen } from './system/Autogen';
import { IForeign } from './system/Foreign';

export type IItem = IAutogen & {
  name: string;
  userId?: string | null;
  user?: IUser;
};

export type IPickItemPayload = { itemId: IItem['id'][]; userId: IUser['id'] };
export type ICreateItemPayload = {
  authId: IUser['id'];
  data: Omit<IItem, keyof IAutogen | keyof IForeign>;
};
export type IGetConfirmedNumberPayload = { authId: IUser['id'] };
export type IListAllItemsPayload = { authId: IUser['id'] };
export type IConfirmPeopeAmountPresencePayload = Pick<
  IUser,
  'confirmedAttendance'
> & { authId: IUser['id'] };
