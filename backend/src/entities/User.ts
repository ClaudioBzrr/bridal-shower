import { IAutogen } from './system/Autogen';
import { IForeign } from './system/Foreign';

export type IUser = IAutogen & {
  name: string;
  role?: string | null;
  email: string;
  confirmedAttendance?: number | null;
};

export type ICreateUserPayload = Omit<
  IUser,
  keyof IAutogen | keyof IForeign | 'role'
>;
export type ICreateAdminPayload = {
  payload: Omit<IUser, keyof IAutogen | keyof IForeign | 'role'> & {
    role: string;
  };
  authId?: IUser['id'];
};
export type ILoginPayload = Pick<IUser, 'email'>;
