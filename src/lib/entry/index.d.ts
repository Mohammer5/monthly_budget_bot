import { Position } from '../sheets/index';

export interface Entry {
  date: string;
  amount: number;
  category: string;
  description: string;
  position?: Position;
}
