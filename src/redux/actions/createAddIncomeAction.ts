import { Entry } from "../../lib/entry/index";
import { Action } from '../index';

export type AddIncomeActionPayload = Entry;
export type AddIncomeAction = Action<AddIncomeActionPayload>;
export type CreateAddIncomeAction = 
  (entry: AddIncomeActionPayload)
    => AddIncomeAction;

export const ADD_INCOME = Symbol();
export const createAddIncomeAction: CreateAddIncomeAction =
  entry => ({
    type: ADD_INCOME,
    payload: entry,
  });
