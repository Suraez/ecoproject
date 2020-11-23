import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as f2} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'

import styles from "../assets/css/likeComment.module.css"
import { connect } from 'react-redux'
import { addLikes } from '../store/actions/comment'
class LikeComment extends React.Component {
    render () {
      return (
        <>
          <div className="mr-4">
            <FontAwesomeIcon
              icon={this.props.isLiked ? f2 : faHeart}
              size="2x"
              onClick={() => this.props.onAddLikes(this.props.totalLikes, this.props.isLiked)}
              className={styles.HoverEffect}
            />
            <p>{this.props.totalLikes} Likes</p>
          </div>
  
          <div className="mr-4">
            <FontAwesomeIcon icon={faComment} size="2x" />
            <p>{this.props.commentLength} comments</p>
          </div>
        </>
      );
    }
    
}

const mapStateToProps = state => {
  return {
    commentLength: state.comments.length,
    totalLikes: state.totalLikes,
    isLiked: state.isLiked
  }
}

const mapDispatchToprops = dispatch => {
  return {
    onAddLikes: (likes, isLiked) => dispatch(addLikes(likes, isLiked))
  }
}

export default connect( mapStateToProps, mapDispatchToprops )( LikeComment );