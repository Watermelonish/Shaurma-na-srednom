/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { shaurmaTypes } from './types';

export const getAllItems = (items) => ({ type: shaurmaTypes.GET_ITEMS, payload: { items } });
export const setErrorMessage = (message) => ({ type: shaurmaTypes.SET_ERROR, payload: { message } });
