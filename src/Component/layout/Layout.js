// MainLayout.js

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Header from "../main/Header";
import { HashRouter as Router } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import RightPanel from "./RightPanel";

const Layout = () => {
  return (
    <Container fluid>
      <Router>
        <Row className="sticky-top bg-white border">
          <Header/>
        </Row>
        <Row>
        <Col md={3} lg={3} xl={2} style={{paddingLeft: '0.2rem'}} className="mt-4 d-none d-md-block position-fixed text-center vh-100 overflow-y">
            <LeftSideBar />
          </Col>
          <Col className="p-0" xs={12} sm={12} md={{ span: 9, offset: 3}} lg={{ span: 9, offset: 3}} xl={{ span: 10, offset: 2}}>
            <RightPanel />
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default Layout;
