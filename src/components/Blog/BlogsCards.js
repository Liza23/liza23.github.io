import React from "react";
import Card from "react-bootstrap/Card";

function BlogsCards(props) {
  return (
    <a className="blog-link" href={props.link}>
      <Card className="blog-card-view">
        <Card.Title
          style={{
            fontWeight: "600",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Img variant="bottom" src={props.imgPath} className="blog-img" />
        <Card.Body>{props.content}</Card.Body>
      </Card>
    </a>
  );
}

export default BlogsCards;
