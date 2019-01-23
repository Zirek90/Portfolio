import content from '../../database/content.json';

export const api = {
    getContent(language = 'pl') {
        return content.filter(obj => obj.lang === language)[0]
    }
};