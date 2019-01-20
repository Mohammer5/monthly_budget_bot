import { Action } from '../index';
import { Position } from '../../lib/sheets/index';

export type DeleteEntryActionPayload = Position;
export type DeleteEntryAction = Action<DeleteEntryActionPayload>;
export type CreateDeleteEntryAction = 
  (limit: DeleteEntryActionPayload)
    => DeleteEntryAction;

export const DELETE_ENTRY = Symbol();
export const createDeleteEntryAction: CreateDeleteEntryAction =
  limit => ({
    type: DELETE_ENTRY,
    payload: limit,
  });
