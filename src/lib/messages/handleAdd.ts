export const handleSpend = (sendMessage, userMessage) => {
  const [ amount, category, ...description ] = userMessage;
  const descriptionString = description.join(' ') || 'N/A';

  sendMessage(`Adding the following:`);
  sendMessage([
    `Amount: ${amount}`,
    `\nCategory: ${category}`,
    `\nDescription: ${descriptionString}`,
  ].join(' '));
};
