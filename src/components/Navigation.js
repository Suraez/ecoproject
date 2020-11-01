import React from 'react'
import {NavLink} from "react-router-dom"

import styles from "../assets/css/header.module.css";

export default function Navigation() {
    return (
        <nav>
              <ul className={`d-flex justify-content-center ${styles.ListStyle} text-muted`}>
                <li className="p-4"><NavLink to="/">Home</NavLink></li> 
                <li className="p-4"><NavLink to="/calc">Calculator</NavLink></li> 
                <li className="p-4"><NavLink to="/developer">Developer</NavLink></li>
              </ul>
        </nav>
    )
}
