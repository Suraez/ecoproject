import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function ListItem() {
    return (
        <div className="container">
            <ListGroup>
                {/* <ListGroupItem tag="a" href="/first" action>Future Worth Calculator using p,i,n</ListGroupItem>
                <ListGroupItem tag="a" href="/second" action>Present Worth Calculator using a,i,n</ListGroupItem>
                <ListGroupItem tag="a" href="/third" action>Future Worth Calculator using a,i,n</ListGroupItem>
                <ListGroupItem tag="a" href="/fourth" action>Future Worth Calculator using g,i,n</ListGroupItem> */}
                <ListGroupItem tag="a" href="/calculator" action> <strong>Go to Calculator</strong> </ListGroupItem>
            </ListGroup>
        </div>
    )
}
