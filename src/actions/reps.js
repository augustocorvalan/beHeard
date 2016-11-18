import * as CONSTANTS from 'actions/constants';

const receiveReps = (reps) => ({ type: CONSTANTS.RECEIVE_REPS, payload: reps })

export const getRepsByZip = (zip) => {
        return dispatch => {
            return fetch(`http://whoismyrepresentative.com/getall_mems.php?output=json&zip=${zip}`)
                .then(response => response.json())
                .then(json => {
                    dispatch(receiveReps(json.results));
                });
        }
}
