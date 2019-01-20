import { combineEpics } from 'redux-observable';
import { handleIncommingMessagesEpic } from "../../redux/epics/handleIncommingMessagesEpic";
import { showHelpMenuEpic } from "../../redux/epics/showHelpMenuEpic";
import { handleSpendingEpic } from "../../redux/epics/addSpendingEpic";

export const rootEpic = combineEpics(
  handleIncommingMessagesEpic,
  showHelpMenuEpic,
  handleSpendingEpic,
);
