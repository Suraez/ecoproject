import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagramSquare   } from '@fortawesome/free-brands-svg-icons'

import "../assets/css/footer.css"

export default function Footer() {
    return (
        <div className="container m-2">
            <div className="row">
                <div className="col-6 d-flex">
                    <h4>Follow Me   :</h4>
                    <div>
                        <a href="http://www.facebook.com/share.php?u=imojha.me" className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x"  /> 
                        </a>
                        <a href="!#" className="google social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/> 
                        </a>
                        <a href="!#" className="google social">
                        <FontAwesomeIcon icon={faInstagramSquare} size="2x"/> 
                        </a>
                    </div>
                </div>
                <div className="col-6">
                <h5 style={{display: 'block', float: 'right'}}>Developed by Suraj Ojha</h5>
            </div>
            </div>
        </div>
    )
}
