import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

/* This could come from an API or Web Service */
const cardData = [
  {
    text: "Video Vault",
    icon: Icons.faFileVideo,
  },
  {
    text: "Database",
    icon: Icons.faServer,
    customStyle: {
      width: "90px",
    },
  },
  {
    text: "Policy & Documents",
    icon: Icons.faFileInvoice,
  },
];

export default function CardsSection() {
  return (
    <>
      <Container>
        <Row>
          {cardData.map((item, index) => (
            <Col key={index}>
              <Card>
                <Card.Body className="text-center">
                  <Card.Text>{item.text}</Card.Text>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="lg"
                    style={item.customStyle || {}}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
