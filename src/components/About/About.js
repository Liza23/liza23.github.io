import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import selfImg1 from "../../Assets/Personal/about-1.png";
import selfImg2 from "../../Assets/Personal/about-2.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">Am I</strong>?
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <Row
              style={{
                justifyContent: "center",
                paddingTop: "120px",
              }}
              className="about-img"
            >
              <img src={selfImg1} alt="about" className="img-fluid" />
              Yes, that's me!
            </Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>

            <Row
              style={{
                justifyContent: "center",
                paddingTop: "260px",
              }}
              className="about-img"
            >
              <img
                src={selfImg2}
                alt="about"
                style={{
                  borderRadius: 10,
                }}
                className="img-fluid"
              />
              Different outfits same pose:)
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
