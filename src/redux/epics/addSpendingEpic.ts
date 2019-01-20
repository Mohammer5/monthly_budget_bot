import { ofType } from "redux-observable";
import { ignoreElements, tap } from 'rxjs/operators';
import { ADD_SPENDING, AddSpendingAction } from "../actions/createAddSpendingAction";
import { sendMessage } from "../../lib/messages/sendMessage";

export const handleSpendingEpic = (action$, state$, { bot }) => action$.pipe(
  ofType(ADD_SPENDING),
  tap(({ payload: { chatId, entry }}: AddSpendingAction) => {
    const reply = sendMessage(bot, chatId);
    reply(
      '@TODO: Add spending in sheet',
      'Adding spending:',
      `Date: ${entry.date}`,
      `Amount: ${entry.amount}`,
      `Category: ${entry.category}`,
      `Description: ${entry.description}`,
    );
  }),
  ignoreElements(),
);
