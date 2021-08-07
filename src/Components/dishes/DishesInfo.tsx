import React, { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function DishesInfo() {
  return (
    <div>
    <Container>
        
      <Card>
        <Card.Body>
 
        <Row>
          <Col><Card.Text>This is some text within a card body.</Card.Text></Col>
         <Col> <Button variant="danger">Go somewhere</Button></Col>
          </Row> 
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}
