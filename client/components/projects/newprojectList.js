import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCards from "./projectCards";

const projectList = () => {
  return (
    <Container>
      <div>
        <Row>
          <h1 className="section-title center" style={{ marginTop: "25px" }}>
            2019 Fall Projects
          </h1>
        </Row>
        <Row>
          <Col md="4" sm="6" style={{ marginBottom: "25px" }}>
            <ProjectCards
              title="Hello"
              imgPath="/static/images/client_logos/cplogogreen.png"
              link="hello"
              subTitle="hello"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default projectList;
