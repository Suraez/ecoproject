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

const getLikes = ( totalLikes ) => {
    return {
        type: ACTIONS.GET_LIKES,
        totalLikes
    }
}

export const fetchLikes = () => {
    return dispatch => {
        axios.get('/likes/likes.json')
            .then(res => {
                dispatch(getLikes(res.data));
            })
            .catch(err => console.log(err))
    }
}

const setLike = (updatedTotalLikes, isLiked) => {
    return {
        type: ACTIONS.SET_LIKE,
        totalLikes: updatedTotalLikes,
        isLiked: !isLiked
    }
}

export const addLikes = (likes, isLiked) => {
    return dispatch => {
        const updatedTotalLikes = isLiked ? likes -1 : likes + 1;
        axios.put("/likes.json", {likes: updatedTotalLikes})
       .then(res => {
            //   setLikes(prevLikes => prevLikes + 1)
            //   setIsLiked(true);
            dispatch(setLike(updatedTotalLikes, isLiked))
      })
       .catch(err => console.log(err))
    }
}

export const setCommentField = (name, value ) => {
    return {
        type: ACTIONS.SET_COMMENT_FIELD,
        name,
        value
    }
}

export const postComment = (e, name, email, comment) => {
    return dispatch => {
        e.preventDefault();
        axios
          .post("/postComments.json", { name, email, comment, date: new Date().toJSON().slice(0,10).replace(/-/g,'/')})
          .then((res) => {
            dispatch(resetCommentField())
            alert("Thanks for the comment! Your comment is submitted for approval.")
          })
          .catch((err) => console.log(err));
    }
}

export const resetCommentField = () => {
    return {
        type: ACTIONS.RESET_COMMENT_FIELD
    }
}