import { shaurmaTypes, basketTypes } from './types'

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
