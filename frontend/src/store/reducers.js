import { shaurmaTypes, basketTypes } from './types'
import {store} from "./index";
import {useDispatch, useSelector} from 'react-redux';

const initState = {
    basket:[{id:1,quantity:5}, {id:2,quantity:6}, {id:3,quantity:11}]
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case basketTypes.CHANGE_QUANTITY:
            console.log(action.payload.basket, 'basket')
            return {...state, basket:action.payload.basket};

        default:
            return state;
    }
}