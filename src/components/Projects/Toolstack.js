import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiJupyter,
  SiTensorflow,
  SiPython,
  SiPytorch,
  SiKeras,
  SiKaggle,
} from "react-icons/si";

function Toolstack() {
  return (
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={3} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiKaggle />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
    </Row>
    </Container>
  );
}

export default Toolstack;
