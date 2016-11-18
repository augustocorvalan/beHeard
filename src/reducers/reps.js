import { RECEIVE_REPS } from 'actions/constants';

const initState = {
    reps: []
}
const reps = (state = initState, { type, payload}) => {
    switch(type) {
        case RECEIVE_REPS:
            return {...state, reps: payload.reps}
        default:
            return state;
    }
}
