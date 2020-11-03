import React, {useState} from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as f2} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'
export default function LikeComment() {
    const [isLiked, setIsLiked] = useState(false);


    return (
        <div className="text-center">
            <div>
                <FontAwesomeIcon icon={isLiked ? f2 : faHeart} size="2x" onClick={() => setIsLiked(true)} />
                <p>3 Likes</p>  
            </div>

            <div>
                <FontAwesomeIcon icon={faComment} size="2x" />
                <p>2 comments</p>  
            </div>
        </div>
    )
}
