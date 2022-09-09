import { shaurmaTypes } from './types'

const initState = {
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case '':
            return '';

        default:
            return state;
    }
}