import { LOAD_CATEGORIES_SUCCESS } from '../actions/categories';

const categories = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return newState;
    }
};

export default categories;