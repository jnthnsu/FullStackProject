import React from "react";
import { 
  Route,
  Switch 
} from "react-router-dom";

import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import HomepageContainer from "../components/home_page/home_page_container";
import Footer from "./footer/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/users/:id" component={UserProfilePageContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/" component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
