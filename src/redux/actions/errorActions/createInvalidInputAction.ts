import { Entry } from "../../../lib/entry/index";
import { Action } from '../../index';
import { CommandPayload } from "../index";

export interface InvalidInputActionPayload extends CommandPayload {
  message: string;
}
export type InvalidInputAction = Action<InvalidInputActionPayload>;
export type CreateInvalidInputAction = 
  (payload: InvalidInputActionPayload)
    => InvalidInputAction;

export const INVALID_INPUT = Symbol();
export const createInvalidInputAction: CreateInvalidInputAction =
  payload => ({ type: INVALID_INPUT, payload });
