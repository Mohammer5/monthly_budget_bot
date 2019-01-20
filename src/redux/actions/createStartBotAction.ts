import { Action } from '../index';
export type StartBotAction = Action<{}>;
export type CreateStartBotAction = () => StartBotAction;

export const START_BOT = Symbol();
export const createStartBotAction =
  () => ({ type: START_BOT });
