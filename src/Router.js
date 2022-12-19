import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Home } from "./pages/home";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<Home />} />
</Routes>
  );
}

export default Router;
