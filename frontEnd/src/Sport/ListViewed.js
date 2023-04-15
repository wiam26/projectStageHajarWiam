import React from "react";
import NavBarAdd from "./NavBarAdd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListView = () => {
    return(
        <div>
            <NavBarAdd/>
            <Container>
                <Row className="mt-3">
                    <Col>
                    <h3>List Viewed</h3>
                    </Col>
                    <Col className="ms-5">
                    <a href="./AddView"><Button variant="secondary">Add View</Button></a>
                    </Col>
                </Row>
                <Row>
                <Col>
                <Card style={{ width: '20rem',marginBottom:"20px",marginTop:"10px",backgroundColor:'#e9f5db'}}>
                    <Row>
                        <Col>
                        <Card.Img src="img/img.jpg" fullWidth />
                        </Col>
                        <Col>
                        <Card.Body>
                            <Card.Title>Ttle stade</Card.Title>
                        </Card.Body>
                        </Col>
                    </Row>
                </Card>
                </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ListView;