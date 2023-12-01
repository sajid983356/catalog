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
import { useNavigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const MainLayout = () => {
  return (
    <Container fluid>
      <Router>
        <Row className="sticky-top bg-white border">
          <Header/>
        </Row>
        <Row>
        <Col sm={4} md={3} lg={3} xl={2} style={{padding: '2rem 0 0 0'}} className="sticky-left text-center">
          {/* <Col sm={4} md={3} lg={2} xl={2} style={{padding: '2rem 0 0 0'}} className="sticky-left text-center d-none d-sm-block"> */}
            <LeftPanel />
          </Col>
          <Col sm={8} md={9} lg={9} xl={10} className="m-0 p-0">
            <RightPanel />
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default MainLayout;
