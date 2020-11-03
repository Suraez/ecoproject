import React from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

import styles from '../src/assets/css/calc.module.css'

export default function Developer() {
    return (
        <div className="container bg-white shadow p-2 text-muted">
        <Navigation />
        <div className="row d-flex justify-content-center">
            <div className="col-md-4 col-12 rounded">
                <img src={require('../src/assets/images/my-pic.jpg')} alt="developer" className={`${styles.image} ${styles.rounded}`}/>
            </div>
            <div className="col-md-4 col-12 text-justify font-italic">
                <h5>
                Hey there,I am Suraj Ojha.I am a student of Tribhuwan University,pursuing my Computer Engineering.When i am not doing study,you can find me doing learning new things,playing sports like cricket,getting involved in social activities and so on.I am a dedicated student working toward the future where i can establish an organization of people who can contribute in the field of technology and science.
                </h5>
            </div>
        </div>
            
        <hr style={{background: '#55b8cf'}}/>
        <Footer />
    </div>
    )
}
