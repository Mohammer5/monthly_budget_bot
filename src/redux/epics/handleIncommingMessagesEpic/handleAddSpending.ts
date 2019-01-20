import * as moment from 'moment';
import { createInvalidInputAction } from "../../actions/errorActions/createInvalidInputAction";
import { createAddSpendingAction } from "../../actions/createAddSpendingAction";

export const handleAddSpending = (chatId, params) => {
  const [ amount, category, ...descriptionWords ] = params;

  if (!amount || !category) {
    return createInvalidInputAction({
      chatId,
      message: 'You need to provide both the amount and the category.',
    });
  } else if (!amount.match(/^[0-9]+(\.[0-9]+)?/)) {
    return createInvalidInputAction({
      chatId,
      message: 'The amount nees to be in the following format "^[0-9]+(\.[0-9]+)?/".',
    });
  } else {
    console.log(
      amount, category, descriptionWords,
      params,
    );
    return createAddSpendingAction({
      chatId,
      entry: {
        date: moment().format('YYYY/MM/DD'),
        amount: parseInt(amount, 10),
        category,
        description: descriptionWords.length
          ? descriptionWords.join(' ')
          : 'N/A',
      }
    });
  }
};
