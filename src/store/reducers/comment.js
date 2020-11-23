import * as ACTIONS from '../actions/actionTypes'

const initialState = {
    comments: [],
    commentData: {
        name: '',
        email: '',
        comment: ''
    }
}

function reducer ( state = initialState, action ) {
    switch(action.type) {
        case ACTIONS.FETCH_COMMENTS:
            return { ...state, comments: action.comments}
        default:
            return {...state}
    }
}

export default reducer;