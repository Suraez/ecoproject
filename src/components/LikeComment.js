import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as f2} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'

import styles from "../assets/css/likeComment.module.css"
import axios from '../axiosConfig'

export default function LikeComment(props) {
    const [comments, setComments] = useState(0);

    useEffect(() => {
        axios.get('/comments.json')
            .then(res => {
                const commentsArr = Object.values(res.data);
                setComments(commentsArr.length)
            })
            .catch(err => console.log(err))
    },[comments])

    return (
      <div className="text-center">
        <div>
          <FontAwesomeIcon
            icon={props.isLiked ? f2 : faHeart}
            size="2x"
            onClick={props.likeHandler}
            className={styles.HoverEffect}
          />
          <p>{props.totalLikes} Likes</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} size="2x" />
          <p>{comments} comments</p>
        </div>
      </div>
    );
}
