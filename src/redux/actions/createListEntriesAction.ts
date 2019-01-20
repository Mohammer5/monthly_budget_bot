import { Action } from '../index';

export type ListEntriesActionPayload = number;
export type ListEntriesAction = Action<ListEntriesActionPayload>;
export type CreateListEntriesAction = 
  (limit: ListEntriesActionPayload)
    => ListEntriesAction;

export const LIST_ENTRIES = Symbol();
export const createListEntriesAction: CreateListEntriesAction =
  limit => ({
    type: LIST_ENTRIES,
    payload: limit,
  });
