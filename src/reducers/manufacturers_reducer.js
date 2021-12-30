import { LOAD_MANUFACTURERS_SUCCESS } from '../actions/manufacturers';

const manufacturers = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_MANUFACTURERS_SUCCESS:
            return action.manufacturers;
        default:
            return newState;
    }
};

export default manufacturers;

