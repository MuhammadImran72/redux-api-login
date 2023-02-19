import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import MainHomePage from "./components/MainHomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Registration from "./components/Registration";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<MainHomePage />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
