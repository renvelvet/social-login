import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getGoogle } from "../../redux/actions";

function SignInGoogle() {
  const dispatch = useDispatch();
  const history = useHistory();
  const responseGoogle = (response) => {
    dispatch(getGoogle(response, history));
  };

  return (
    <div>
      <GoogleLogin
        clientId="664695514697-eg2m7n7ceudln4eb1ilae0u5ol2vk9qo.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default SignInGoogle;
