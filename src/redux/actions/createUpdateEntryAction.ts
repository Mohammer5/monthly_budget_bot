import { Entry } from "../../lib/entry/index";
import { Action } from '../index';

export type UpdateEntryActionPayload = Entry;
export type UpdateEntryAction = Action<UpdateEntryActionPayload>;
export type CreateUpdateEntryAction = 
  (entry: UpdateEntryActionPayload)
    => UpdateEntryAction;

export const UPDATE_ENTRY = Symbol();
export const createUpdateEntryAction: CreateUpdateEntryAction =
  entry => ({
    type: UPDATE_ENTRY,
    payload: entry,
  });
