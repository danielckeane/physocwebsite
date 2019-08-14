import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./App.css";
//transparent
//#5e81ac

/*
          <img
            src="images/PhysocNewLogoWhiteNoText.svg"
            width="100px"
            style={{ margin: "0em 1em" }}
          />
*/
class NavBar extends Component {
  render() {
    return (
      <div

        style={{ width: "100%", background: "transparent", boxShadow: "none", "position": "fixed", "margin": "0px 0px" }}
        color="#00ff00"
      >
        <Toolbar>

          <Typography variant="h6" style={{ color: "#bf616a" }}>

            <a href="#TopPage" className="Nav-button" style={{ color: "#bf616a" }}>
              Physoc
              </a>
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

          <Typography
            variant="h6"

          >
            <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }} className="Nav-button">
              Facebook
          </a>
          </Typography>


        </Toolbar>
      </div>
    );
  }
}

export default NavBar;
//#3b5998

/*
          <Typography
            variant="h6"

          >
            <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }} className="Nav-button">
              Facebook
          </a>
          </Typography>



            <a href="#TopPage" className="Nav-button" style={{ color: "#bf616a" }}>
              Physoc
              </a>
*/