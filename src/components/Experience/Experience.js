import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Experience() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Research Internship [Indiana University, Bloomington]"
              date="April 2021 - Present"
              content={[
                "Constructing Latent Dirichlet Allocation model to perform topic modeling out of the review contents of the scrapped data from IOS and Android stores",
              ]}
            />
            <Resumecontent
              title="Research Internship [Prof. Shankaranarayanan S, IIT Bombay]"
              date="May 2021 - Present"
              content={[
                "Using Machine learning algorithms to obtain blackhole solutions in General Relativity and beyond",
                // "Imploying NeuroDiffEq package to solve partial differential equations like Stelle gravity equation",
              ]}
            />
            <Resumecontent
              title="Machine Learning Internship [Idfy, Baldor, Mumbai]"
              date="June 2020 - August 2020"
              content={[
                "Incorporated the improvements in the existing Document OCR Detection models in Golang using VGG16 to employ binary classification for ID documents",
                // "Reviewed ResNet, VGG16, EfficientNet, Inception model to employ binary image classifiers for ID documents",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Indian Institute of Technology, Bombay"
              date="2019 - Present"
              content={[
                "B.Tech in Computer Science and Engineering",
                "Minors in Entrepreneurship (DSSE, IIT Bombay)",
                // "CGPA: 8.37",
              ]}
            />
            <Resumecontent
              title="Delhi Public School, Panipat City"
              date="2019"
              content={["Intermediate/+2 | Precentage: 97.0%"]}
            />
            <Resumecontent
              title="Delhi Public School, Panipat City"
              date="2017"
              content={["Marticulation | CGPA: 10.0"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
