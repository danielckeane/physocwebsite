import React, { Component } from "react";
import NavBar from "./NavBar.js";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import TopPage from "./TopPage.js";
import AboutUs from "./AboutUs.js";
import UpcomingEvents from "./UpcomingEvents.js";
import OurCommittee from "./Committee.js";
import Sponsors from "./Sponsors.js";
import ContactUs from "./ContactUs.js";

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
//<OurCommittee />
class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <TopPage />
          <AboutUs />
          <UpcomingEvents />
          <ContactUs />
          <Sponsors />
          

          <img
            src="images/SolarSystem.svg"
            alt=""
            style={{
              position: "absolute",
              alignItems: "left",
              float: "left",
              left: "-330px",
              top: "140%",
              width: "600px",
              zIndex: "0"
            }}
          />

          <img
            src="images/Tardis.svg"
            alt=""
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
            You've reached the end, or, as any good physicist knows, you've only
            just found the beginning.
          </Typography>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
