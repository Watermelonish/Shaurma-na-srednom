/* eslint-disable import/prefer-default-export */
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';

const composeEnhancers = composeWithDevTools();

export const store = createStore(reducers, composeEnhancers);
