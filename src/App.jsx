import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Common/header/Header.jsx";
import Footer from "./Component/Common/footer/Footer.jsx";
import Breadcrumb from "./Component/Common/breadcrumb/Breadcrumb.jsx";
import MoveToTop from "./Component/Common/MoveToTop.jsx";
import { MainRouter } from "./Router/Index.jsx";
import "./style.scss";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import env from "react-dotenv";

function App() {
  const [common, setCommon] = useState({});
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const handleCloseLoandingData = () => {
    setOpen(false);
  };

  const handleToggleLoandingData = () => {
    setOpen(!open);
  };

  function handleCommonData() {
    fetch(`${env.MAIN_API}/common`,{credentials: 'include'})
      .then((res) => {
        return res.json();
      })
      .then((commonData) => {
        if (Object.keys(commonData.data).length !== 0) {
          setCommon(commonData.data);
          handleCloseLoandingData();
        }
      })
      .catch((err) => {
        handleCloseLoandingData();
        console.log(err);
      });
  }

  function handleGetUser() {
    if (document.cookie) {
      fetch(`${env.MAIN_API}/user`, {credentials: 'include'})
        .then((res) => res.json())
        .then((data) => {
          setUser(data.currentUser);
        });
    }
  }

  useEffect(() => {
    handleGetUser();
  }, []);

  useEffect(() => {
    handleToggleLoandingData();
    handleCommonData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header data={common.header} user={user} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleCloseLoandingData}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Switch>
          {MainRouter.map((route, index) => {
            return (
              <Route exact path={route.path} key={index}>
                <Breadcrumb />
                {route.component}
              </Route>
            );
          })}
        </Switch>
        <MoveToTop/>
        <Footer data={common.footer} />
      </Router>
    </div>
  );
}

export default App;
