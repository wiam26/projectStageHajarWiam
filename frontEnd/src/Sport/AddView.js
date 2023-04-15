import React from "react";
import NavBarAdd from "./NavBarAdd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddView =() => {
    return(
        <div>
            <NavBarAdd/>
            <Container>
                <h3 className="mt-3">Add View</h3>
                <Row className="mt-3 mb-3">
                    <Col>
                        <Form.Label>Imgage</Form.Label>
                        <Form.Control type="file"/>
                    </Col>
                    <Col>
                        <Form.Label>Imgage1</Form.Label>
                        <Form.Control type="file"/>
                    </Col>
                    <Col>
                        <Form.Label>Imgage2</Form.Label>
                        <Form.Control type="file"/>
                    </Col>
            
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Title"/>
                    </Col>
                    <Col>
                        <Form.Label>Ville</Form.Label>
                        <Form.Control type="text" name="ville" placeholder="ville"/>
                    </Col>
                    <Col>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="location" placeholder="Location"/>
                    </Col>
                    <Col>
                        <Form.Label>Format</Form.Label>
                        <Form.Control type="text" name="format" placeholder="Format"/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="type" placeholder="Type"/>
                    </Col>
                    <Col>
                        <Form.Label>Surface</Form.Label>
                        <Form.Control type="text" name="surface" placeholder="Surface"/>
                    </Col>
                    <Col>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Price"/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" placeholder="Description" style={{ height: '100px' }}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="secondary" type="submit">Add</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default AddView;