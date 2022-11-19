import React from "react";
import { Outlet } from "react-router-dom";

const Chats = () => {
  return (
    <div>
      <div>Chats</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Chats;
