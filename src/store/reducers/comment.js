import * as ACTIONS from '../actions/actionTypes'

const initialState = {
    comments: [],
    totalLikes: null,
    isLiked: false,
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
        case ACTIONS.GET_LIKES:
            return { ...state, totalLikes: action.totalLikes}
        case ACTIONS.SET_LIKE:
            return { ...state, totalLikes: action.totalLikes, isLiked: action.isLiked }
        case ACTIONS.SET_COMMENT_FIELD:
            return {
                ...state,
                commentData: {
                    ...state.commentData,
                    [action.name]: action.value
                }
            }
        case ACTIONS.RESET_COMMENT_FIELD:
            return {
                ...state,
                commentData: {
                    ...state.commentData,
                    name: '',
                    email: '',
                    comment: ''
                }
            }
        default:
            return {...state}
    }
}

export default reducer;