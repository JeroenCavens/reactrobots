import myApi from '../apis/my_api';

/*
* action types
*/

export const LOAD_MANUFACTURERS_SUCCESS = 'LOAD_MANUFACTURERS_SUCCESS';

/*
 * action creators
 */

export function loadManufacturersSuccess(manufacturers) {
    return {type: LOAD_MANUFACTURERS_SUCCESS, manufacturers};
}

export function loadManufacturers() {
    return (dispatch) => {
        return myApi.getAllManufacturers().then(
            (result) => {
                dispatch(loadManufacturersSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}