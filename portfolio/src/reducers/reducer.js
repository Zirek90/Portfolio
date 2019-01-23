import { api } from '../components/api/api'; 

import {SWITCH_LANGUAGE} from '../actions/action-types';

const initialState = {
    content: api.getContent()
};

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {
                content: api.getContent(action.language),
            };
        default:
            return state
    }
}

export default reducer;