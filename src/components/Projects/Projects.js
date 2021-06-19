import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import algo from "../../Assets/Projects/algo.png";
import imageInpaint from "../../Assets/Projects/imageInpaint.png";
import plant from "../../Assets/Projects/plant.jpeg";
import starHopping from "../../Assets/Projects/starHopping.png";
import sentiments from "../../Assets/Projects/sentiments.jpg";
import gan from "../../Assets/Projects/gan.jpg";
import plagirsm from "../../Assets/Projects/plagirsm.png";
import genes from "../../Assets/Projects/genes.jpeg";

import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are few of the self projects or course projects that I've done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageInpaint}
              isBlog={false}
              title="Image Inpainting Using Deep Learning Techniques"
              description="Inpainting is a conservation process where damaged, deteriorating, or missing parts of an artwork are filled in to present a complete image. Here, deep learning is used to perform inpainting on images."
              link="https://github.com/Liza23/Image-Inpainting-Using-Deep-learning-Techniques"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="Why Hype Around GANs?"
              description="Yann LeCun described GANs as “the most interesting idea in the last 10 years in Machine Learning”. And, indeed, Generative Adversarial Networks (GANs for short) have had a huge success since they were introduced in 2014 by Ian J. Goodfellow.This project involved learning many machine learning algorithms leading to GANs.
              "
              link="https://github.com/Liza23/Why-Hype-Around-GAN-s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plagirsm}
              isBlog={false}
              title="Plagarism Detection"
              description="Red Plag is a plagiarism checker tool that allows user to detect source code plagiarism and locate the instances of plagiarism within the code files pairwise. The frontend is implemented in Angular and backend with Django and Django REST framework."
              link="https://github.com/tantheta01/Plagiarism-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genes}
              isBlog={false}
              title="Genetic Algorithms"
              description="Genetic Algorithm (GA) is a search-based optimization technique based on the principles of Genetics and Natural Selection. In this project, genetic algorithm have been used to perform dimensionality reduction in hyperspectral images."
              link="https://github.com/girish-srivatsa/GNR-ASIP-Project"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starHopping}
              isBlog={false}
              title="Star Hopping"
              description="The project is aimed at hunting Messier objects including clusters, galaxies, nebulae by developing and automating the procedure to find hops. It includes hopping guidelines for various stellar objects like Messiers by creating an interface that takes into account different input parameters."
              link="https://github.com/Liza23/Star-Hopping-KSP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiments}
              isBlog={false}
              title="Sentiment-Analysis"
              description="The project performs a sentiment analysis on the Amazon review dataset to predict the overall sentiment expressed by the customers who shop online and further classifies the category of the review to be either delivery related or product related."
              link="https://github.com/Liza23/Sentiment-Analysis"
            />
          </Col>

          


        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}

        {/* Adding stuff from here */}

        <h1 className="project-heading">
          My <strong className="purple">Technical</strong> Toolkit
        </h1>
        <Techstack />

        <h1 className="project-heading">
          My <strong className="purple">Machine Learning</strong> Toolkit
        </h1>
        <Toolstack />
        <Github />

        {/* To here */}
      </Container>
    </Container>
  );
}

export default Projects;
