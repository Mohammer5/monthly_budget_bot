import { AnyAction } from 'redux';

export interface Action<T = undefined> extends AnyAction {
  payload?: T;
}

export type Reducer<T> = (state: T, action: Action<any>) => T;
