import "./App.css";
import Navbar from "./components/Navbar";
import Maincourse from "./components/Maincourse";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Your from "./components/Your";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Maincourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/yourdata" element={<Your />} />
      </Routes>
    </div>
  );
}

export default App;
