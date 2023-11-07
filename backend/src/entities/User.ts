import { IItem } from './Item';
import { IAutogen } from './system/Autogen';
import { IForeign } from './system/Foreign';

export type IUser = IAutogen & {
  name: string;
  role?: string | null;
  finishedSubmit?: boolean | null;
  email: string;
  confirmedAttendance?: number | null;
};

export type ICreateUserPayload = Omit<
  IUser,
  keyof IAutogen | keyof IForeign | 'role' | 'finishedSubmit'
>;
export type ICreateAdminPayload = {
  payload: Omit<
    IUser,
    keyof IAutogen | keyof IForeign | 'role' | 'finishedSubmit'
  > & {
    role: string;
  };
  authId?: IUser['id'];
};
export type ILoginPayload = Pick<IUser, 'email'>;

export type ISubmitEventPayload = {
  authId: IUser['id'];
  pickedItems: IItem['id'][];
  confirmedAttendance: number;
};
