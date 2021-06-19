import React from "react";
import Card from "react-bootstrap/Card";
import { BsLink } from "react-icons/bs";

function BlogsCards(props) {
  return (
    <a
      className="blog-link"
      href={props.link}
      // target="_blank"
      //   rel="noreferrer"
      //   style={{ fontSize: "1.2em" }}
    >
      <Card className="blog-card-view">
        <Card.Title>
          {props.title}
        </Card.Title>
        <Card.Img variant="bottom" src={props.imgPath} className="blog-img" />
        <Card.Body>{props.content}</Card.Body>
      </Card>
    </a>
  );
}

export default BlogsCards;
