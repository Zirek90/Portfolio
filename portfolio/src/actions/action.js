import {SWITCH_LANGUAGE} from './action-types';

export const actions = {
    switchLanguage(language) {
        return {
            type: SWITCH_LANGUAGE,
            language
        }
    }
};