import { sendHelpText } from "./sendHelpText";

export const handleNoCommandProvided = sendMessage => {
  sendMessage('You have to use a command that starts with the / character!');
  sendHelpText(sendMessage);
};
