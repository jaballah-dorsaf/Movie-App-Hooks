import React, { useState } from "react";
import Rating from "./rating";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import ModalExemple from "./modalExemple";


const ListMovies = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Row>
        {props.listMovies
          .filter(el =>
            el.title.toUpperCase().includes(props.searchtitle.toUpperCase())
          )
          .filter(el => el.rating >= props.searchrating)
          .map((element, index) => (
            <Col sm="3" key={index} style={{ marginBottom: "20px" }}>
              <Card className="card-movie">
                <Rating rating={element.rating} />
                <CardImg
                  top
                  src={element.image}
                  alt={`Card image ${index}`}
                  height="50%"
                />
                <CardBody body="true">
                  <CardTitle>{element.title}</CardTitle>
                  <CardSubtitle>{element.year}</CardSubtitle>
                  <CardText className="card-desc">
                    {element.description}
                  </CardText>
                  <div>
                    <Button color="primary">Edit</Button>{" "}
                    <Button
                      color="danger"
                      onClick={() => props.onDeleteMovie(index)}
                    >
                      Delete
                    </Button>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
      <Button className="btn-add" onClick={toggle} color="success">
        Add Movie
      </Button>
      <ModalExemple
        toggle={toggle}
        modal={modal}
        onAddMovie={props.onAddMovie}
        setTitle={props.setTitle}
        setGenre={props.setGenre}
        setYear={props.setYear}
        setDescription={props.setDescription}
        setImage={props.setImage}
        setRating={props.setRating}
      />
    </>
  );
};
export default ListMovies;
