import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "./Products";
import Services from "./Services";

const Business = () => {
    return (
        <Container fluid>
            <h1 className="mt-5">Business</h1>
            <Row>
                <Col xs={6}>
                    <Products />
                </Col>
                <Col xs={6}>
                    <Services />
                </Col>
            </Row>
        </Container>
    )
}

export default Business;