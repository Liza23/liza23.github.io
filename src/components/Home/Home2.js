import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Personal/image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a{" "}
              <a href="https://www.cse.iitb.ac.in/" className="purple">
                Computer Science and Engineering
              </a>{" "}
              undergraduate at Indian Institute of Technology, Bombay. Mind you,
              that sounds like I'm geeky but I'm almost always up conversations,
              long drives, walks and ofcourse shopping!
              <br />
              <br />
              Owing to my CS background, I'm proficent in C++ and Python. I'm
              fluent in frontent technologies like React JS, Redux and Anuglar.
              I'm interested in Machine Learning, Image Processing and Natural
              Language and have had a chance to master these through various
              courses, projects and internships which you can look up in the{" "}
              <a href="project" className="purple">
                Project
              </a>{" "}
              section.
              <br />
              <br />
              Though poles apart from CS, I'm doing in a Minor in
              Enterprenurship from the{" "}
              <a href="https://www.iitb.ac.in/dsce/" className="purple">
                Desai Seth School of Enterprenurship
              </a>
              . Call it The Pitchers or The Social Network, that lit the intial
              entreprenurial fire in me, I plan to do something big (exactly how
              is unknown to me)! I own the startup{" "}
              <a
                href="https://www.instagram.com/femealforpcos/"
                className="purple"
              >
                FeMeal
              </a>{" "}
              where we aim to reduce the sufferings of women who have PCOS -
              Polycystic Ovarian Syndrome affecting every 1 in 5 women in India.
              <br />
              <br />
              I'm in the Autonomous Subdivision of the{" "}
              <a href="https://iitbmartian.github.io/" className="purple">
                Mars Rover Technical Team
              </a>
              , IIT Bombay. For a fact, we don't send people to mars! I work on
              designing path planning algorithms for the autnomous operation of
              the rover in Maritan terrains.
              <br />
              <br />
              This year, I've had a chance to explore research. I'm doing my
              summer internship at the Indiana University, Bloomington, USA
              under{" "}
              <a
                href="http://homes.sice.indiana.edu/cfchung/"
                className="purple"
              >
                Prof. Christina Chung
              </a>{" "}
              in Human Computer Interaction and Machine Learning. I'm also
              working under{" "}
              <a href="http://home.iitb.ac.in/~shanki" className="purple">
                Prof. Shankaranarayanan S
              </a>{" "}
              from the Physics Department, IIT Bombay on a project where we are
              trying to use Machine Learning to come up with black hole
              solutions in General Relativity and beyound. Oh and ofcourse, how
              can I be I without taking a in POR in the thing that I like, I'm
              also the Department Research Coordinator for the CSE Department in
              the UG Academic Council, IIT Bombay.
              <br />
              <br />I can go on for so long (that's what she said?) here but
              then what would my{" "}
              <a href="about" className="purple">
                About
              </a>{" "}
              Page would do? So, I'll stop here telling a random fact, which is
              that even though I come from Delhi (okay Delhi NCR) but my heart
              lies in Mumbai xD!
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"
                style={{borderRadius: 400/ 2}} 

              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2><span className="purple">Connect </span>with me here</h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/liza23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/liza-dahiya-008117188/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/liza.dahiya.357"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/liza.d.23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
