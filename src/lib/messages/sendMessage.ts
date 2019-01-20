import { isArray } from 'lodash/fp';

export const sendMessage = (bot, chatId) => (...msgs) =>
  bot.sendMessage(
    chatId,
    msgs.join('\n'),
  );
