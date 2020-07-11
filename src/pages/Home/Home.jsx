import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

import { logout } from "../../redux/actions";

function Home() {
  const user = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const dataUser =
    user.google.profile !== undefined
      ? user.google
      : user.facebook.profile !== undefined && user.facebook;

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>
          {dataUser.profile !== undefined && (
            <div>
              <img src={dataUser.profile.imageUrl} alt="ava" />
              <h3>Name: {dataUser.profile.name}</h3>
              <h3>Email: {dataUser.profile.email}</h3>
              <Button
                color="primary"
                size="sm"
                onClick={() => dispatch(logout(history))}
              >
                Logout
              </Button>{" "}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
