import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as f2} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'

import styles from "../assets/css/likeComment.module.css"
// import axios from '../axiosConfig'
import { connect } from 'react-redux'
// import {getCommentsLength} from '../store/actions/comment'

function LikeComment(props) {

    // useEffect(() => {
    //     // axios.get('/comments.json')
    //     //     .then(res => {
    //     //         const commentsArr = Object.values(res.data);
    //     //         setComments(commentsArr.length)
    //     //     })
    //     //     .catch(err => console.log(err))
    // },[comments])

    return (
      <>
        <div className="mr-4">
          <FontAwesomeIcon
            icon={props.isLiked ? f2 : faHeart}
            size="2x"
            onClick={props.likeHandler}
            className={styles.HoverEffect}
          />
          <p>{props.totalLikes} Likes</p>
        </div>

        <div className="mr-4">
          <FontAwesomeIcon icon={faComment} size="2x" />
          <p>{props.commentLength} comments</p>
        </div>
      </>
    );
}

const mapStateToProps = state => {
  return {
    commentLength: state.comments.length
  }
}
export default connect( mapStateToProps )( LikeComment );