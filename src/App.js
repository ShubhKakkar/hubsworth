import React from "react";
import "./index.css";
import "./App.css";

// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// elements
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./ProtectedRoutes/AdminRoutes";
import Admin from "./containers/Admin";
import FindAll from "./containers/Admin/FindAll";
import Home from "./containers/Home";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import NotFound from "./containers/404";
import Chats from "./containers/Chats";
import SingleChat from "./containers/Chats/SingleChat";
import Profile from "./containers/Profile";
import FindOne from "./containers/Admin/FindOne";

function App() {
  const isAuthenticated = true;
  const isAdmin = true;
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* Unprotected Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
                <Admin />
              </AdminRoutes>
            }
          >
            <Route path="find-all" element={<FindAll />} />
            <Route path="find-one/:id" element={<FindOne />} />
          </Route>
          {/* Protected Routes */}
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
            path="/chats"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Chats />
              </ProtectedRoutes>
            }
          >
            <Route path="/chats/:id1/:id2" element={<SingleChat />} />
          </Route>
          {/* Unknown Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
