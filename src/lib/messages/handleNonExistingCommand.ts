import { sendHelpText } from "./sendHelpText";

export const handleNonExistingCommand = sendMessage => {
  sendMessage('The command you provided does not exist!');
  sendHelpText(sendMessage);
};
