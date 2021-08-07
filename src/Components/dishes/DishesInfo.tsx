import React, { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function DishesInfo() {
  return (
    <div>
    <Container>
        
      <Card>
        <Card.Body>
 
        <Row>
          <div className="restaurant-menu-tab-header">
          <Col>
          <div className="restaurant-name-status">
          <h3 className="restaurant-name">This is some text within a card body.</h3>
          <span className="restaurant-status active">Online</span>
          <span className="restaurant-status">Offline</span>
          </div>
          </Col> 
         </div>
          </Row> 
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}
