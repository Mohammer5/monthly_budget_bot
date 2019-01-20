import { commands } from '../commands/commands';

export const sendHelpText = sendMessage => {
  sendMessage('These are the available commands:', '');
  sendMessage(
    `/${commands.help.join('; /')}`, 'List available commands', '',
    `/${commands.list.join('; /')} last-n-amount?`, 'List spendings and incomes', '',
    `/${commands.spend.join('; /')} amount category description?`, 'Add a spending', '',
    `/${commands.aquire.join('; /')} amount category description?`, 'Add an income', '',
    `/${commands.lend.join('; /')} amount person`, 'Add lending money', '',
    `/${commands.lends.join('; /')}`, 'List outstanding claims', '',
    `/${commands.update.join('; /')} row column amount category description?`, 'Update a spending/income', '',
    `/${commands.delete.join('; /')} row column`, 'Delete a spending/income', '',
  );
};
