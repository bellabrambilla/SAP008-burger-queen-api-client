import { Login } from "./pages/login";
import { Register } from "./pages/signup"
import { Home } from "./pages/home";

import { Routes, Route } from "react-router";

function Navigator() {
  return (
    <Routes>
    <Route exact path="/" element={Login} />
    <Route path="/signup" element={Register} />
    <Route path="/home" element={Home} />
    </Routes>
  );
}

export default Navigator;
