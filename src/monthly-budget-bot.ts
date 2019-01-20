import * as TelegramBot from 'node-telegram-bot-api';
import { configureStore } from "./redux/configureStore";
import { rootReducer } from "./monthly-budget-bot/redux/rootReducer";
import { rootEpic } from "./monthly-budget-bot/redux/rootEpic";
import { getConfig } from "./monthly-budget-bot/getConfig";
import { createStartBotAction } from "./redux/actions/createStartBotAction";

const config = getConfig();
const bot = new TelegramBot(config.token, { polling: true });
const store = configureStore(rootReducer, rootEpic, { bot, config });

store.dispatch(createStartBotAction());
