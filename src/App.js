import React, { Component } from "react";
import NavBar from "./NavBar.js";
import logo from "./logo.svg";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import TopPage from "./TopPage.js";
import AboutItem from "./AboutItem.js";
import EventItem from "./EventItem.js";
import AboutUs from "./AboutUs.js";
import UpcomingEvents from "./UpcomingEvents.js";
import OurCommittee from "./Committee.js";
//import { Transform } from "stream";
//import "./moveAlongPath.js";
/*
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#ecefe4"
    },
    secondary: {
      main: "#0000ff"
    },
    text: "#ecefe4"
    //background: "#ecefe4"
  }
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <TopPage />
          <AboutUs />
          <UpcomingEvents />



          <img
            src="images/SolarSystem.svg"
            style={{
              position: "absolute",
              alignItems: "left",
              float: "left",
              //right: "60%",
              left: "-330px",
              top: "140%",
              width: "600px",
              zIndex: "0"
            }}
          />

          <img
            src="images/Tardis.svg"
            style={{
              position: "absolute",
              alignItems: "left",
              float: "left",
              right: "7em",
              top: "110%",
              width: "100px",
              zIndex: "0"
            }}
          />

          <OurCommittee />




        </div>

        <div
          style={{
            width: "100%",


            backgroundColor: "#2e3440",
            textAlign: "center",
            paddingTop: "0.7em",
            paddingBottom: "0.7em"

          }}
        >
          <Typography
            variant="body"
            style={{
              margin: "auto auto",
              color: "#ecefe4",
              fontStyle: "italic"
            }}
          >
            You've reached the end, or, as any good physics knows, you've only
            just found the beginning.
          </Typography>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
