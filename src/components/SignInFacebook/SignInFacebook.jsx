import React, { useState, useEffect } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import { useHistory } from "react-router-dom";

function SignInFacebook() {
  const history = useHistory();
  const [facebook, setfacebook] = useState({});

  const handleResponse = (data) => {
    setfacebook(data);
  };

  const handleError = (error) => {
    setfacebook({ error });
  };

  useEffect(() => {
    if (facebook.profile !== undefined) {
      history.push("/profile");
    }
  }, [facebook, history]);
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
