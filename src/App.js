import "./css/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/home";

import Navbar from "./routes/navbar";
import Common from "./components/common";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/common/:id" element={<Common />} />

          <Route path="*" element={<h1>No Url</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//  <Navbar />;
