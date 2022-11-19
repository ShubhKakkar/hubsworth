import React from 'react';
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div>Admin</div>
      <div><Outlet /></div>
    </div>
  )
}

export default Admin