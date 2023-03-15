import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Flightsdata from "./pages/Flightsdata";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flightsdata" element={<Flightsdata />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
