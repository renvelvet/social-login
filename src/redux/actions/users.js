const GET_GOOGLE = "GET_GOOGLE";
const GET_FACEBOOK = "GET_FACEBOOK";

const getGoogle = (data, history) => {
  const profile = {
    ...data,
  };

  if (profile.profileObj !== undefined) {
    localStorage.setItem("isLoggedIn", true);
    history.push("/profile");
  }

  return {
    type: GET_GOOGLE,
    payload: {
      profile: {
        name: profile.profileObj.name,
        imageUrl: profile.profileObj.imageUrl,
        email: profile.profileObj.email,
      },
    },
  };
};

const getFacebook = (data, history) => {
  const { profile } = data;

  if (profile.name !== undefined) {
    localStorage.setItem("isLoggedIn", true);
    history.push("/profile");
  }

  return {
    type: GET_FACEBOOK,
    payload: {
      profile: {
        name: profile.name,
        imageUrl: profile.picture.data.url,
        email: profile.email,
      },
    },
  };
};
const LOGOUT = "LOGOUT";

const logout = (history) => {
  history.push("/");
  localStorage.clear();
  return {
    type: LOGOUT,
  };
};

export { GET_GOOGLE, GET_FACEBOOK, getGoogle, getFacebook, logout, LOGOUT };
