import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as f2} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'
export default function LikeComment() {
    return (
        <div className="text-center">
            <div>
                <FontAwesomeIcon icon={faHeart} size="2x" />
                <p>3 Likes</p>  
            </div>

            <div>
                <FontAwesomeIcon icon={faComment} size="2x" />
                <p>2 comments</p>  
            </div>
        </div>
    )
}
