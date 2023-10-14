import { IAutogen } from './system/Autogen';

export type IAdmin = IAutogen & {
  name: string;
  password: string;
};
