import React from "react";
import "./App.css";
import Home from "./components/Home";
import Classrooms from "./components/Classrooms";
import ViewClass from "./components/ViewClass";
import Profile from "./components/Profile";
import Quizzes from "./components/Quizzes";
import StartQuiz from "./components/Quiz/Quiz";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardNavigation from "./components/DashboardNavigation";
import ScrollUpButton from "react-scroll-up-button";
import PublicNavigation from "./components/PublicNavigation";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Reports from "./components/Reports";
import Support from "./components/Support";

import EditProfile from "./components/EditProfile";
import Certificate from "./components/Certificate";
import { UserContext } from "./context/user";
import Footer from "./components/Footer";
import CreateQuiz from "./components/CreateQuiz";
import StudentDashboardNavigation from "./components/Student/StudentDashboardNavigation";
function App() {
  const { user } = React.useContext(UserContext);
  if (user.token && user.role == "Manager") {
    return (
      <BrowserRouter>
        <ScrollUpButton />
        <div className="container-fullwidth">
          <DashboardNavigation />
          <Switch>
            <Route path="/" component={Dashboard} exact></Route>
            <Route path="/dashboard" component={Dashboard} exact></Route>
            <Route path="/classrooms" component={Classrooms}></Route>
            <Route path="/viewclass" component={ViewClass}></Route>
            <Route path="/quizzes" component={Quizzes}></Route>
            <Route path="/reports" component={Reports}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
            <Route path="/startquiz" component={StartQuiz}></Route>
            <Route path="/createquiz" component={CreateQuiz}></Route>
            <Route path="/faqs" component={Support}></Route>
            <Route path="/certificate" component={Certificate}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  } else if (user.token && user.role == "Student") {
    return (
      <BrowserRouter>
        <ScrollUpButton />
        <div className="container-fullwidth">
          <StudentDashboardNavigation />
          <Switch>
            <Route path="/" component={Dashboard} exact></Route>
            <Route path="/dashboard" component={Dashboard} exact></Route>
            <Route path="/classrooms" component={Classrooms}></Route>
            <Route path="/viewclass" component={ViewClass}></Route>
            <Route path="/quizzes" component={Quizzes}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
            <Route path="/startquiz" component={StartQuiz}></Route>
            <Route path="/faqs" component={Support}></Route>
            <Route path="/certificate" component={Certificate}></Route>
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
            <Route path="/faqs" component={Support}></Route>
            <Route path="/contact-us" component={ContactUs}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
