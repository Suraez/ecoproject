import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

import styles from "../assets/css/calc.module.css"
import Comment from './Comment'

export default function Calc() {
    return (
        <div className="container bg-white shadow text-muted">
            <Navigation />
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={require('../assets/images/a1.jpg')} alt="image1" className={styles.image}/>
                </div>
                <div className="col-md-4 col-12 offset-md-2">
                    <h4>Fill out the values.And get answers in seconds.</h4>
                    <div className="form-group">
                        <label htmlFor="firstInput">P value</label>
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
                    <div className="form-group text-center">
                    <button type="submit" className="btn btn-info">
                       Calculate
                    </button>
                    </div>
                </div>
            </div>
            <h4>Comments</h4>
            <hr style={{background: '#55b8cf'}}/>
            <div className="row">
                <div className="col-md-6 col-12">
                    <Comment />
                </div>
            </div>
            <hr style={{background: '#55b8cf'}}/>
            <Footer />
        </div>
    )
}
