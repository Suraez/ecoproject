import React from 'react'
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faUser  } from "@fortawesome/free-regular-svg-icons";
import styles from "../assets/css/calc.module.css"

export default function Comment(props) {
    return (
        <div className={`d-flex ${styles.shadowEffect} p-2 mt-4`}>
            {props.comment}
            <div className={styles.comment}>
            <FontAwesomeIcon icon={faUser} />{"     "}
                {props.name}
                <div>
                {props.date}
                </div>
            </div>
        </div>
    )
}
