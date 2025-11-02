import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/events">Events</Link>
          <Link to="/inbox">Inbox</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
