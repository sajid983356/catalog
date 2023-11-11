import React, { useState } from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LeftPanel() {
  const navigate = useNavigate();
  const handleClick = (type) => {
    navigate(`/category/${type}`)
  };
  return (
    <div>
      <h5>Product List</h5>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="border-0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <div className="ml-2">
              <ListGroup>
                <ListGroup.Item action onClick={() => handleClick("belt_loop")}>
                  belt_loop
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => handleClick("rings")}>
                  Rings
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default LeftPanel;
