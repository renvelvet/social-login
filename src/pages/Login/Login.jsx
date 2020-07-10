import React from "react";
import { Container } from "reactstrap";

import { SignInFacebook, SignInGoogle } from "../../components";

function Login() {
  return (
    <Container className="themed-container" fluid="sm">
      <h1>Social Login</h1>
      <SignInFacebook />
      <SignInGoogle />
    </Container>
  );
}

export default Login;
