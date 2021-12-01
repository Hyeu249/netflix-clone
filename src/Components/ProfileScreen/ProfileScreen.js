import React from "react";
import Nav from "../HomeScreen/Nav/Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { auth, signOut } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigator = useNavigate();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <button
              className="profileScreen__signOut"
              onClick={() => {
                signOut(auth);
                navigator("/");
                window.location.reload();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
