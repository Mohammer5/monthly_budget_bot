import { Entry } from "../../../lib/entry/index";
import { Action } from '../../index';
import { CommandPayload } from "../index";

export interface InvalidUserActionPayload extends CommandPayload {
  message: string;
}
export type InvalidUserAction = Action<InvalidUserActionPayload>;
export type CreateInvalidUserAction = 
  (payload: InvalidUserActionPayload)
    => InvalidUserAction;

export const INVALID_USER = Symbol();
export const createInvalidUserAction: CreateInvalidUserAction =
  payload => ({ type: INVALID_USER, payload });
