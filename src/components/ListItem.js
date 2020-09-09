import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'

export default function ListItem() {
    return (
        <div className="container">
            <ListGroup>
                <ListGroupItem> <Link to="/calculator" style={{color: '#48cae4', textDecoration: 'none'}}><strong>Go to Calculator</strong></Link> </ListGroupItem>
            </ListGroup>
        </div>
    )
}
