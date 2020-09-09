import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Answer from './Answer';


export default function Calculator() {
    const [pvalue, setPvalue] = useState(null);
    const [avalue, setAvalue] = useState(null);
    const [gvalue, setGvalue] = useState(null);
    const [ivalue, setIvalue] = useState(null);
    const [nvalue, setNvalue] = useState(null);
    const [ansa, setAnsa] = useState(null);
    const [ansb, setAnsb] = useState(null);
    const [ansc, setAnsc] = useState(null);
    const [ansd, setAnsd] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        let temp;
        if (ivalue !==null && nvalue !==null){
          temp = ivalue + 1;
          temp = temp ** nvalue;
          setAnsa(pvalue * temp);
          let temp2 = (temp - 1) / (ivalue * temp);
          setAnsb(avalue*temp2)
          let temp3 = (temp - 1) / ivalue;
          setAnsc(avalue*temp3);
          let temp4 = (temp3 / ivalue) - (nvalue / ivalue);
          setAnsd(gvalue * temp4)
        }
    }
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto bg-secondary p-4">
          <h5 style={{background: 'lightBlue', padding: '10px'}}>You don't have to fill every field.Just fill the field required in your formula.For e.g if you wanna calculate f = p*(i+1)^n just fill the pvalue, ivalue and nvalue</h5>
          <Form onSubmit={submitHandler}>
          <FormGroup row>
            <Label for="form1" sm={2}>
              P value
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="pvalue"
                id="form1"
                placeholder="Enter the value of P"
                onChange={(e) => setPvalue(parseFloat(e.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="form4" sm={2}>
              A value
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="avalue"
                id="form4"
                placeholder="Enter the value of A"
                onChange={(e) => setAvalue(parseFloat(e.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="form5" sm={2}>
              G value
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="gvalue"
                id="form5"
                placeholder="Enter the value of G"
                onChange={(e) => setGvalue(parseFloat(e.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="form2" sm={2}>
              i value
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="ivalue"
                id="form2"
                placeholder="Enter the value of i"
                onChange={(e) => setIvalue(parseFloat(e.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="form3" sm={2}>
              n value
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="nvalue"
                id="form3"
                placeholder="Enter the value of n"
                onChange={(e) => setNvalue(parseFloat(e.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col>
              <Button color="info">Calculate</Button>
            </Col>
          </FormGroup>
          <p>
            <Link to="/" style={{color: '#48cae4', textDecoration: 'none'}}>Go back</Link>
          </p>
        </Form>
          </div>
        </div>
      </div>
        
        <Answer ans={ansa} imageName="a1.jpg"/>
        <Answer ans={ansb} imageName="a2.jpg"/>
        <Answer ans={ansc} imageName="a3.jpg"/>
        <Answer ans={ansd} imageName="a4.jpg"/>
      </>
    );
  }
