import { Entry } from "../../lib/entry/index";
import { Action } from '../index';
import { CommandPayload } from "./index";

export interface ShowHelpMenuActionPayload extends CommandPayload {}
export type ShowHelpMenuAction = Action<ShowHelpMenuActionPayload>;
export type CreateShowHelpMenuAction = 
  (entry: ShowHelpMenuActionPayload)
    => ShowHelpMenuAction;

export const SHOW_HELP_MENU = Symbol();
export const createShowHelpMenuAction: CreateShowHelpMenuAction =
  entry => ({
    type: SHOW_HELP_MENU,
    payload: entry,
  });
