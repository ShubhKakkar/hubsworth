import React from "react";
import "./index.css";
import "./App.css";

// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// elements
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./ProtectedRoutes/AdminRoutes";
import Home from "./containers/Home";
import Admin from "./containers/Admin";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import NotFound from "./containers/404";
import Chats from "./containers/Chats";
import Profile from "./containers/Profile";

function App() {
  const isAuthenticated = true;
  const isAdmin = true;
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
                <Admin />
              </AdminRoutes>
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Chats />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
