import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardCreation from "./routes/Card/CardCreation";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import LoginRef from "./routes/Login/LoginRef";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginRef />} />
            <Route path="card/create" element={<CardCreation />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
