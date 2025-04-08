import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Body from "./Components/Body";
import Confirm from "./Components/Confirm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/confirmation" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
