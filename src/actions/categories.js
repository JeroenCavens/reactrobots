import myApi from '../apis/my_api';

/*
* action types
*/

export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';

/*
 * action creators
 */

export function loadCategoriesSuccess(categories) {
    return {type: LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
    return (dispatch) => {
        return myApi.getAllCategories().then(
            (result) => {
                dispatch(loadCategoriesSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}