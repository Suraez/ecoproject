import React from 'react'
import styles from "../assets/css/header.module.css"
export default function Calculator(props) {
    return (
    <>
    <h4 className="text-left pl-2" style={{color: '#6B757D'}}>{props.label}</h4>
    <div className={`d-flex align-items-center justify-content-center text-white ${styles.btnStyles} m-2`}>
        <div id="formula">{props.formula}</div>
    </div>
    </>   
    )
}
