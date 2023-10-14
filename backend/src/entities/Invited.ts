import { IItem } from './Item';
import { IAutogen } from './system/Autogen';

export type IInvited = Omit<IAutogen, 'id'> & {
  id: number;
  name: string;
  confirmedAttendance: boolean;
  itemId?: string;
  item: IItem;
};
