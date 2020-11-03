import React from 'react'
import { Route, Link } from 'react-router-dom'
import Calc from './Calc'

import Calculator from './Calculator'
import Footer from './Footer'
import Navigation from './Navigation'

import p1 from '../assets/images/a1.jpg';

export default function Calculators() {
    return (
        <div className="container bg-white shadow p-2 text-muted">
        <Navigation />
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12">
                 <Link to={{
                     pathname: '/calc',
                     state: {
                         sum: 'P',
                         imagePath: p1
                     }
                 }}><Calculator formula="P (F/P, i%, n)" label="Future Worth"/></Link>
                </div>
                <div className="col-md-4 col-12">
                <Link to="/calc"><Calculator formula="P (F/P, i%, n)" label="Future Worth"/></Link>
                </div>
                <div className="col-md-4 col-12">
                <Link to="/calc"><Calculator formula="P (F/P, i%, n)" label="Future Worth"/></Link>                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-12">
                    <Calculator formula="F (P/F, i%, n)" label="Present Worth"/>
                </div>
                <div className="col-md-4 col-12">
                    <Calculator formula="P (A/P, i%, n)" label="Annual Worth" />
                </div>
                <div className="col-md-4 col-12">
                    <Calculator formula="A (F/A, i%, n)" label="Future Worth"/>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-12">
                    <Calculator formula="G (F/G, i%, n)" label="Future Worth"/>
                </div>
                <div className="col-md-4 col-12">
                    <Calculator formula="F (G/F, i%, n)" label="Gradient Worth"/>
                </div>
            </div>
        </div>
        <hr style={{background: '#55b8cf'}}/>
        <Footer />
        <Route path="/calc" exact component={Calc} />
    </div>

    )
}
