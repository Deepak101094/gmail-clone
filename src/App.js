import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Mail from "./components/mail";
import EmailList from "./components/emailList";
import SendMail from "./components/sendMail";
import {selectSendMessageIsOpen} from "./features/mailSlice";


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <div className="app">
        {/* header */}
        <Header />

        <div className="app_body">
          <SideBar />

          <Switch>
            <Route exact={true} path="/mail">
              <Mail />
            </Route>
            <Route exact={true} path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

      {sendMessageIsOpen && <SendMail />}  
      </div>
    </Router>
  );
}

export default App;
