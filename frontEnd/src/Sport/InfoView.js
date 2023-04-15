import React from 'react';
import "./Info.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const InfoView = () => {
    return (
        <div className='bg'>
             <NavBar/>
        <div className='d-flex'>
            <div className='container'>
            <div>
            <Carousel>
            <Carousel.Item>
            <img className="d-block img-fluid img" src="./img/img2.jpg" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block img-fluid img" src="./img/img2.jpg" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block img-fluid img" src="./img/img2.jpg" alt="First slide"/>
            </Carousel.Item>
            </Carousel>
            </div>
            <div>
                <h2>Title</h2>
            </div>
            <div>
                <Row>
                    <Col sm={8}>
                        <h5>Description</h5>
                        <p>Description</p>
                        <ul>
                            <li>Format: format</li>
                            <li>type: type</li>
                            <li>surface: surface</li>
                            <li>price: price Mad/30min</li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <h5>Location</h5>
                        <span style={{marginBottom:'10px'}}>Location</span>
                        <h5>Opening Hour</h5>
                        <Card style={{ width: '18rem',marginBottom:'10px' }}>
                        <Card.Header>Opening time</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Row><Col>Monday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Tuesday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Wednesday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Tuesday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Friday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Saturday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Sunday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <Card body className='mb-2 card'><Row><Col sm={10} className="m-auto cardFooter">If you want to book this stade click on book</Col><Col sm={2}><Button style={{width:'90px'}}>Book</Button></Col></Row></Card>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default InfoView;