import React from "react";
import { Container, Row, Col } from "reactstrap";

import { SignInFacebook, SignInGoogle } from "../../components";

function Login() {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>
          <h1>Social Login</h1>
          <SignInFacebook />
          <SignInGoogle />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
