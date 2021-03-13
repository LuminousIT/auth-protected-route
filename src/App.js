import "./App.css";
import Home from "./View/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
