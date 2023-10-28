import { IAutogen } from './system/Autogen';
import { IForeign } from './system/Foreign';

export type IUser = IAutogen & {
  name: string;
  role: string;
  email: string;
  confirmedAttendance: number;
};

export type ICreateUserPayload = Omit<IUser, keyof IAutogen | keyof IForeign>;
export type ILoginPayload = Pick<IUser, 'email'>;
