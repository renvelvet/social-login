import React, { useState } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getFacebook } from "../../redux/actions";

function SignInFacebook() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, seterror] = useState({});

  const handleResponse = (data) => {
    dispatch(getFacebook(data, history));
  };

  const handleError = (errors) => {
    seterror({ errors });
    console.log(error);
  };

  return (
    <div>
      <FacebookProvider appId="1445397718996547">
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    </div>
  );
}

export default SignInFacebook;
