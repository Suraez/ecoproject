import React from 'react'
// import {withRouter} from "react-router-dom"

import Footer from './Footer'
import Navigation from './Navigation'
import styles from "../assets/css/calc.module.css"
import Comment from './Comment'
import PostComment from './PostComment'
import assets from '../assets'

import AnsModal from './AnsModal'

function Calc(props) {
    return (
    <>
        <div className="container bg-white shadow text-muted p-4">
            <Navigation />
            <div className="row d-flex justify-content-center m-2">
                <div className="col-md-8 col-12 text-justify">
                    Let this calculator do the heavy lifting.This formula helps you to calculate equivalent worth (Future Worth, F) given the values of Present Worth (P),
                    interest rate per year (effective interest rate) and time (investment duration).
                </div>
            </div>


            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={assets[props.location.state.imagePath]} alt="image1" className={styles.image}/>
                </div>
                <div className="col-md-6 col-12">
                    <h4>Fill in the values.And get answers in seconds.</h4>
                    <hr style={{background: '#55b8cf', height: '6px'}}/>
                    <div className="form-group">
                        <label htmlFor="firstInput">{props.location.state.sum} value</label>
                        <input type="text" id="firstInput" className="form-control" placeholder="e.g. 10000"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="secondInput">i value</label>
                        <input type="text" id="secondInput" className="form-control" placeholder="e.g. type 0.1 for 10%"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="thirdInput">n value</label>
                        <input type="text" id="thirdInput" className="form-control" placeholder="e.g. 5"/>
                    </div>
                    <div className="text-center">
                        <AnsModal />
                    </div>
                </div>
            </div>
            <h4>Comments</h4>
            <hr style={{background: '#55b8cf'}}/>

            <div className="row">
                <div className="col-md-6 col-12">
                    <Comment />
                    <Comment />
                    <Comment />
                    
                </div>
                <div className="col-md-6 col-12">
                    <PostComment />
                </div>
            </div>
            <hr style={{background: '#55b8cf'}}/>
            <Footer />
            
        </div>
        
    </>
    )
}
export default Calc;