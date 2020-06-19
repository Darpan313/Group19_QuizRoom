import React from "react";
import "./App.css";
import Home from "./components/Home";
import Classrooms from "./components/Classrooms";
import Profile from "./components/Profile";
import Quizzes from "./components/Quizzes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardNavigation from "./components/DashboardNavigation";
import ScrollUpButton from "react-scroll-up-button";
import PublicNavigation from "./components/PublicNavigation";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import EditProfile from "./components/EditProfile";
import { UserContext } from "./context/user";
function App() {
  const { user } = React.useContext(UserContext);
  if (user.token) {
    return (
      <BrowserRouter>
        <ScrollUpButton />
        <div className="container-fullwidth">
          <DashboardNavigation />
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact></Route>
            <Route path="/classrooms" component={Classrooms}></Route>
            <Route path="/quizzes" component={Quizzes}></Route>
            <Route path="/analytics" component={Analytics}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <ScrollUpButton />
        <div className="container-fullwidth">
          <PublicNavigation />
          <Switch>
            <Route exact path="/" component={Home} exact></Route>
            <Route path="/features" component={Features}></Route>
            <Route path="/faqs" component={Faqs}></Route>
            <Route path="/contact-us" component={ContactUs}></Route> }
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
