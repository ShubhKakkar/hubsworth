import React from "react";
import "./index.css";

// Components
import Profile from "../../components/Profile";
import Posts from "../../components/Posts";
import Widgets from "../../components/Widgets";

function index() {
  return (
    <div>
      <Profile />
      <Posts />
      <Widgets />
    </div>
  );
}

export default index;
