import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Common/header/Header.jsx";
import Footer from "./Component/Common/footer/Footer.jsx";
import Breadcrumb from "./Component/Common/breadcrumb/Breadcrumb.jsx";
import { MainRouter } from "./Router/Index.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style.scss";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [common, setCommon] = useState({});
  let user = {};
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const setUserLogin = () => {};
  function handleCommonData() {
    fetch(`${window.env.MAIN_API}/common`)
      .then((res) => {
        if (res.locals && res.locals._user) {
          user = res.locals._user;
        }
        return res.json();
      })
      .then((commonData) => {
        if (Object.keys(commonData.data).length !== 0) {
          setCommon(commonData.data);
          handleClose();
        }
      })
      .catch((err) => {
        handleClose();
        console.log(err);
      });
  }

  useEffect(() => {
    handleToggle();
    handleCommonData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header data={common.header} user={user} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
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
        <Footer data={common.footer} />
      </Router>
    </div>
  );
}

export default App;
