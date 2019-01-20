import { includes } from 'lodash/fp';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { tap, ignoreElements, switchMap } from 'rxjs/operators';
import { START_BOT } from '../actions/createStartBotAction';
import { commands } from '../../lib/commands/commands';
import { createShowHelpMenuAction } from '../actions/createShowHelpMenuAction';
import { createAddSpendingAction } from "../actions/createAddSpendingAction";
import { handleAddSpending } from "./handleIncommingMessagesEpic/handleAddSpending";
import { createInvalidUserAction } from "../actions/errorActions/createInvalidUserAction";

export const handleIncommingMessagesEpic = (action$, state$, { bot, config }) => action$.pipe(
  ofType(START_BOT),
  switchMap(action => Observable.create(observer => {
    bot.on('message', ({ text, from, chat: { id: chatId }}) => {
      const command = text.replace(/^\/|\s.*$/g, '');
      const params = text.replace(/^[^\s]*(\s|$)/, '').split(' ');
      const includesCommand = includes(command);

      observer.next(
        from.id !== config.userId ?
          createInvalidUserAction({ chatId, message: 'Access denied.' }) :

        text[0] !== '/' ?
          createInvalidUserAction({ chatId, message: 'No command specified.' }) :

        includesCommand(commands.help) ?
          createShowHelpMenuAction({ chatId }) :
        
        includesCommand(commands.spend) ?
          handleAddSpending(chatId, params) :

        createInvalidUserAction({ chatId, message: 'Invalid command specified.' })
      );
    });
  })),
);
