import React from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state);
  // const history = useHistory();
  // const dispatch = useDispatch();

  const dataUser =
    user.google.profile !== undefined
      ? user.google
      : user.facebook.profile !== undefined && user.facebook;

  return (
    <div>
      {dataUser.profile !== undefined && (
        <div>
          <img src={dataUser.profile.imageUrl} alt="ava" />
          <h3>Name: {dataUser.profile.name}</h3>
          <h3>Email: {dataUser.profile.email}</h3>
          {/* <button onClick={() => dispatch(logout(history))}>Logout</button> */}
        </div>
      )}
    </div>
  );
}

export default Profile;
