import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { SHOW_HELP_MENU, ShowHelpMenuAction } from '../actions/createShowHelpMenuAction';
import { sendMessage } from "../../lib/messages/sendMessage";
import { sendHelpText } from "../../lib/messages/sendHelpText";

export const showHelpMenuEpic = (action$, state$, { bot }) => action$.pipe(
  ofType(SHOW_HELP_MENU),
  tap((action: ShowHelpMenuAction) => {
    const reply = sendMessage(bot, action.payload.chatId);
    sendHelpText(reply);
  }),
  ignoreElements(),
);
