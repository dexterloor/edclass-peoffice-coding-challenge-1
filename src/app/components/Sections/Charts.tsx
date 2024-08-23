import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import MyPieCharts from "../Charts/PieChart";

export default function ChartsSection() {
  return (
    <>
      <Container>
        <Row>
          <MyPieCharts />
        </Row>
      </Container>
    </>
  );
}
