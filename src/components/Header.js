import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from '../assets/css/header.module.css'
import Calculator from './Calculator.js'
import Footer from './Footer'
import LikeComment from './LikeComment'
import Navigation from './Navigation'

export default function Header(props) {
    return (
      <div className="container shadow bg-white text-muted">
        <div className="row">
          <div className="col-12">
            <Navigation />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-12 d-flex justify-content-center align-items-center text-muted">
            <LikeComment
              totalLikes={props.totalLikes}
              isLiked={props.isLiked}
              likeHandler={props.likeHandler}
            />
          </div>
          <div className="col-md-6 col-12">
            <img
              src={require("../assets/images/man.svg")}
              alt="illustrations"
            />
          </div>
          <div className="col-md-4 text-muted col-12 mt-3 text-center">
            <h4 className={styles.textStyles}>
              Click on any of the calculator
            </h4>
            <Link to="/calc/1"><Calculator formula="P (F/P, i%, n)" label="Future Worth" /></Link> 
            <Calculator formula="A (P/A, i%, n)" label="Present Worth" />
            <Calculator formula="F (A/F, i%, n)" label="Annual Worth" />
            <Calculator formula="G (F/G, i%, n)" label="Future Worth" />
            <NavLink to="/calculators">
              <button className={`${styles.showMore}`}>Show More</button>
            </NavLink>
          </div>
        </div>
        <hr style={{ background: "#55b8cf" }} />
        <Footer />
      </div>
    );
}
