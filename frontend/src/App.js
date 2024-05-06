import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Homepage from "./Pages/Homepage";
import CreateIDPage from "./Pages/CreateIDPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import UserProfilePage from "./Pages/UserProfilePage";
import RegistrationSuccessPage from "./Pages/RegistrationSuccessPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/CreateID" component={CreateIDPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/registration-success" component={RegistrationSuccessPage} />
      <Route path="/user-profile" component={UserProfilePage} />
    </div>
  );
}

export default App;
