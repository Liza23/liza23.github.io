import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import IITBCover from "../../Assets/Blogs/IITB-Cover.jpg";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={IITBCover}
              link="/blog/my-2-years-at-IITB"
              title="My 2 Years at IIT Bombay"
              content="Using some 500 words, I tried to recapitulate my experience at IIT Bombay for the 0.75 + 1.25 i years that I've spent here till now."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
