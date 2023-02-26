import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/user/otp" element={<Otp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
