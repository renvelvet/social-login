const LOGOUT = "LOGOUT";

const logout = (history) => {
  history.push("/");
  localStorage.clear();
  return {
    type: LOGOUT,
  };
};

export { logout, LOGOUT };
