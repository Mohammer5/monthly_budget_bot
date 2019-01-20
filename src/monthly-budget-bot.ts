import * as fs from 'fs';
import * as TelegramBot from 'node-telegram-bot-api';
import { includes } from 'lodash/fp';
import { commands } from './lib/commands/commands';
import { sendHelpText } from './lib/messages/sendHelpText';
import { sendMessage } from './lib/messages/sendMessage';
import { handleSpend } from './lib/messages/handleAdd';
import { handleUnauhtorized } from './lib/messages/handleUnauthorized';
import { handleNoCommandProvided } from './lib/messages/handleNoCommandProvided';
import { handleNonExistingCommand } from './lib/messages/handleNonExistingCommand';

const config = JSON.parse(fs.readFileSync('../config.json', 'utf8'));

if (!config.token || !config.userId) {
  console.log('You must provide a token and an userId in the config.json in the root dir of the bot!');
  process.exit(1);
}

const bot = new TelegramBot(config.token, { polling: true });

bot.on('message', json => {
  const { text, chat, from } = json;
  const command = text.replace(/^\/|\s.*$/g, '');
  const params = text.replace(/^[^\s]*(\s|$)/, '').split(' ');
  const includesCommand = includes(command);
  const reply = sendMessage(bot, chat.id);

  if (from.id !== config.userId)
    return handleUnauhtorized(reply);

  if (text[0] !== '/')
    return handleNoCommandProvided(reply);

  if (includesCommand(commands.help))
    return sendHelpText(reply);

  if (includesCommand(commands.spend))
    return handleSpend(reply, params);

  console.log('no command provided');
  return handleNonExistingCommand(reply);
});
