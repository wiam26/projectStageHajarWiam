import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";
import Footer from "./Footer";
import './View.css';
const View = () => {
    return(
        <div style={{backgroundColor:'#d0ffb7'}}>
            <div>
                <NavBar/>
                <div className="d-flex justify-content-center align-items-center" style={{paddingTop:'10vh',}}>
                <Row className="container text-center">
                <Col className="">
                    <Card style={{ width: '15rem',backgroundColor:'white'}} className="mb-5" >
                    <Card.Img variant="Top" src="#" />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">location</Card.Subtitle>
                        <Card.Text>Price: prix DH/30 min</Card.Text>
                        <Button className="me-2 btn" variant="dark" href="./BookDetails" style={{width:'90px'}}>Book</Button>
                        <Button href="./InfoView" variant="dark" className="btn" style={{width:'90px'}}>View</Button>
                    </Card.Body>
                    </Card>
                </Col> 
                </Row>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default View;