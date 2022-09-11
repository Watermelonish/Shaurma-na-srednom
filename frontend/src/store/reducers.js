/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { shaurmaTypes } from './types';

const initState = {
  items: [],
  error: '',
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case shaurmaTypes.GET_ITEMS:
      return { ...state, items: action.payload.items };

    default:
      return state;
  }
};
