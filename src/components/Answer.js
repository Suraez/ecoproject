import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import styles from '../assets/css/answer.module.css'

export default function Answer({ans, imageName}) {
  let classes;
    if (ans === null || ans === 0 || isNaN(ans)){
      classes = 'none'
    } else {
      classes = 'flex'
      ans = ans.toFixed(2)
    }
    return (
      <Card style={{ display: classes }} className={styles.dis}>
        <CardImg
          top
          width="100%"
          height="150px"
          src={require(`../assets/images/${imageName}`)}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Economics Formulae</CardTitle>
          <CardText>
            The answer of the formula shown in above figure is:
          </CardText>
          <CardSubtitle><strong>Answer: {ans}</strong></CardSubtitle>
        </CardBody>
      </Card>
    );
}
