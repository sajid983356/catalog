// MainLayout.js

import React, { useState } from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Collapse,
  ListGroup,
} from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const MainLayout = () => {
  return (
    <Container fluid>
      {/* Header with menu items */}
      <Router>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col sm={2} className="border p-3 text-center">
            <LeftPanel />
          </Col>
          <Col sm={10} className="border-top p-3">
            <RightPanel />
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default MainLayout;
