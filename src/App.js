import "./App.css";
import Home from "./View/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";

import MainDashboardEntry from "./View";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/" component={MainDashboardEntry} />
    </BrowserRouter>
  );
}

export default App;
