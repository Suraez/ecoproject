import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import styles from '../assets/css/header.module.css'
import Calculator from './Calculator.jsx'
import Footer from './Footer'
import LikeComment from './LikeComment'

// import { Link } from 'react-router-dom';
export default function Header() {
    return (
      <div className={`container shadow bg-white`}>

        <div className="row">
          <div className="col-12">
            <nav >
              <ul className={`d-flex justify-content-center ${styles.ListStyle} text-muted`}>
                <li className="p-4">Home</li>
                <li className="p-4">Calculators</li>
                <li className="p-4">Developers</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-12 d-flex justify-content-center align-items-center text-muted">
              <LikeComment />
          </div>
          <div className="col-md-6 col-12">
             <img src={require('../assets/images/man.svg')} alt="illustrations"/>
          </div>
          <div className="col-md-4 text-muted col-12 mt-3 text-center">
            <h4 className={styles.textStyles}>Click on any of the calculator</h4>
              <Calculator formula="P (F/P, i%, n)" label="Future Worth"/>
              <Calculator formula="A (P/A, i%, n)" label="Present Worth"/>
              <Calculator formula="F (A/F, i%, n)" label="Annual Worth"/>
              <Calculator formula="G (F/G, i%, n)" label="Future Worth"/>
           <button className={`${styles.showMore}`}>Show More</button>
          </div>
        </div>
        <hr style={{background: '#55b8cf'}}/>
        <Footer />
      </div>
    );
}
