import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./App.css";
//transparent
//#5e81ac
class NavBar extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{ background: "transparent", boxShadow: "none" }}
        color="#00ff00"
      >
        <Toolbar>
          <img
            src="images/PhysocLogo.svg"
            width="20em"
            style={{ margin: "0em 1em" }}
          />
          <Typography variant="h6" style={{ color: "#bf616a" }}>
            Physoc
          </Typography>
          <div style={{ flexGrow: "1" }} />

          <Typography
            variant="h6"
            className="NotDisplayOnSmallScreens"
          >
            <a href="#AboutUs" className="Nav-button">
              About
          </a>
          </Typography>

          <Typography
            variant="h6"
            className="NotDisplayOnSmallScreens"
          >
            <a href="#UpcomingEvents" className="Nav-button">
              Events
          </a>
          </Typography>
          <Typography
            variant="h6"
            className="NotDisplayOnSmallScreens"
          >
            <a href="#OurCommittee" className="Nav-button">
              Committee
          </a>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
