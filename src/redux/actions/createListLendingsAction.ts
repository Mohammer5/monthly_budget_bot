import { Action } from '../index';

export type ListLendingsActionPayload = number;
export type ListLendingsAction = Action<ListLendingsActionPayload>;
export type CreateListLendingsAction = 
  (limit: ListLendingsActionPayload)
    => ListLendingsAction;

export const LIST_LENDINGS = Symbol();
export const createListLendingsAction: CreateListLendingsAction =
  limit => ({
    type: LIST_LENDINGS,
    payload: limit,
  });
