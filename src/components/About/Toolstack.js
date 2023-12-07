import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos, SiWebstorm, SiDatagrip, SiRider, SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiWindows />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiWebstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDatagrip />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRider />
        </Col>
    </Row>
  );
}

export default Toolstack;
