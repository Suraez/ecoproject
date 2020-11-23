import * as ACTIONS from './actionTypes'
import axios from '../../axiosConfig'

const setComments = ( comments ) => {
    return {
        type: ACTIONS.FETCH_COMMENTS,
        comments
    }
}

export const fetchComments = () => {
    return dispatch => {
        axios.get('/comments.json')
          .then(res => {
              let allComments = []
              for (let key in res.data) {
                  allComments.push({
                      id: key,
                      ...res.data[key]
                  })
              }
              dispatch(setComments(allComments))
          })
          .catch(err => console.log(err))
    }
}

// export const getCommentsLength = () => {
//     return {
//         type: ACTIONS.GET_COMMENTS_LENGTH
//     }
// }