import React from 'react'

import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faUser  } from "@fortawesome/free-regular-svg-icons";

import styles from "../assets/css/calc.module.css"

export default function Comment() {
    return (
        <div className={`d-flex ${styles.shadowEffect} p-2 mt-4`}>
            Hey, it looks awesome.
            <div className={styles.comment}>
            <FontAwesomeIcon icon={faUser} />{"     "}
                Sneha Dixit
                <div>
                {new Date().toJSON().slice(0,10).replace(/-/g,'/')}
                </div>
            </div>
        </div>
    )
}
