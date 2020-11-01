import React from 'react'

import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faUser  } from "@fortawesome/free-regular-svg-icons";

export default function Comment() {
    return (
        <div>
            Hey , it looks awesome .
            <FontAwesomeIcon icon={faUser} />
            Sneha Dixit
        </div>
    )
}
