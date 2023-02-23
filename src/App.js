import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import MainHomePage from "./components/MainHomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Registration from "./components/Registration";
import AllUsers from "./components/AllUsers";
import ViewSign from "./components/ViewSign";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/alluser" element={<MainHomePage />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/showuser" element={<AllUsers />} />
          <Route path="/viewsign" element={<ViewSign />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
