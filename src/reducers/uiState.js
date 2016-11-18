import { UPDATE_ZIP } from 'actions/constants';

const uiState = (state = '', { type, payload }) => {
    switch (type) {
        case UPDATE_ZIP:
            return {...state, zip: payload.zip }
        default:
            return state
    }
}

export default uiState;
