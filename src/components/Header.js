import React, {useState} from 'react'
import { Jumbotron, Button, Badge } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../assets/css/header.module.css'
export default function Header() {
    const [like, setLikes] = useState(5);
    const [isLiked, setLiked] = useState(false);

    const likeHandler = () => {
      setLikes(like+1);
      setLiked(true);
    }

    return (
      <div>
        <Jumbotron className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            Just another project. Calculate following formulae of Engineering Economics real fast. Hope you like it.   
          </p>
          <hr className="my-2" />
          <div className="row">
            <div className="col-md-3 col-12">
            <img src={require(`../assets/images/a1.jpg`)} alt="ecoformula1" className={styles.image}/>
            </div>
            <div className="col-md-3 col-12">
            <img src={require(`../assets/images/a2.jpg`)} alt="ecoformula1" className={styles.image}/>
            </div>
            <div className="col-md-3 col-12">
            <img src={require(`../assets/images/a3.jpg`)} alt="ecoformula1" className={styles.image}/>
            </div>
            <div className="col-md-3 col-12">
            <img src={require(`../assets/images/a4.jpg`)} alt="ecoformula1" className={styles.image}/>
            </div>
          </div>
          <p className="lead">
            <Button color="primary m-2" onClick={likeHandler} disabled={isLiked}><FontAwesomeIcon icon={faHeart} />{isLiked ? ' Liked': ' Like'}</Button><Badge color="secondary">{like}</Badge>
          </p>
        </Jumbotron>
      </div>
    );
}
