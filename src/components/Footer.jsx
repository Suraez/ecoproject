import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter   } from '@fortawesome/free-brands-svg-icons'

import "../assets/css/footer.css"

export default function Footer() {
    return (
        <div className="container m-2">
            <div className="row">
                <div className="col-md-6 col-12 d-flex">
                    <h4>SHARE  :</h4>
                    <div>
                        <a href="http://www.facebook.com/share.php?u=imojha.me" target="blank" className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x"  /> 
                        </a>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=imojha.me&title=Hey%2C%20check%20out%20this%20engineering%20economics%20calculator%20(PW%2C%20AW%2C%20FW%20)%20" target="blank" className="google social" >
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/> 
                        </a>
                        <a href="https://twitter.com/intent/tweet?url=imojha.me&text=Engineering%20Economics%20in%20seconds%20with%20this%20Calculator&hashtags=engineering,economics,economicsCalculator" target="blank" className="google social">
                        <FontAwesomeIcon icon={faTwitter} size="2x"/> 
                        </a>
                    </div>
                </div>
                <div className="col-md-6 col-12 mt-2">
                <h5 style={{display: 'block', float: 'right'}}>Developed by Suraj Ojha</h5>
            </div>
            </div>
        </div>
    )
}
