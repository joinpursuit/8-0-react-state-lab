import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const StartGame = ({ count, setCount, value, setValue }) => {
  function incrementScore() {
    setCount((prevState) => prevState + value);
  }

  function payTenPoints() {
    if (count < 10) {
      alert("You can't afford that!");
    } else {
      setCount((previousCount) => previousCount - 10);
      setValue((previousValue) => previousValue + 1);
    }
  }

  return (
    <Row className="d-grid gap-3">
      <Col className="mx-5">
        <h1 className="score">Current Score: {count}</h1>
      </Col>
      <Col className="plusOne">
        <Button variant="primary" onClick={incrementScore}>
          +{value}
        </Button>
      </Col>
      <Col className="plusMore">
        <Button variant="warning" className="bigBtn" onClick={payTenPoints}>
          Pay 10 points to change from +{value} to +{value + 1}
        </Button>
      </Col>
    </Row>
  );
};

export default StartGame;
