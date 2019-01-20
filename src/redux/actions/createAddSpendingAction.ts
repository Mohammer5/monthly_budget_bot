import { Entry } from "../../lib/entry/index";
import { Action } from '../index';
import { CommandPayload } from "./index";

export interface AddSpendingActionPayload extends CommandPayload {
  entry: Entry;
}
export type AddSpendingAction = Action<AddSpendingActionPayload>;
export type CreateAddSpendingAction = 
  (payload: AddSpendingActionPayload)
    => AddSpendingAction;

export const ADD_SPENDING = Symbol();
export const createAddSpendingAction: CreateAddSpendingAction =
  payload => ({ type: ADD_SPENDING, payload });
