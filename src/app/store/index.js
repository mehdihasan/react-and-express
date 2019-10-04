import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState';

export const store = createStore(

    // passing one state and an action
    function reducer(state = defaultState, action) {
        return state;
    }
)