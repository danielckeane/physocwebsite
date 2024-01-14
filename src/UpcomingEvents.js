import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

import EventItem from "./EventItem.js";
/* fontSize: 45px */
class UpcomingEvents extends Component {
  render() {
    return (
      <div
        className="App-content"
        style={{ backgroundColor: "#2e3440" }}
        id="UpcomingEvents"
      >
        <Typography variant="h4" style={{ margin: "0.2em" }} class="titleTextFont">
          {" Upcoming Events "}
        </Typography>


        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeW4-LAVmxwW0CnKsPs-uHzVy5JyHfSOFgx_EVzexVfgLCQtw/viewform" style={{textDecoration: "none", color: "#ecefe4"}}>
        <EventItem
                    img="images/RedQuark3.svg"
                    date="Thursday 18/01 - 8pm"
                    title="Burns Night Ceilidh"
                    location="GUU Dining Hall"
                    body="Start this semester with a fun dance!"
                /></a>

        <EventItem
                    img="images/RedQuark3.svg"
                    date="TBC"
                    title="7 Minutes of Science"
                    location="TBC"
                    body="Join us for a conference-style event to hear about the exciting research being done in the various departments of our university!"
                />
        </div>
    );
  }
}

export default UpcomingEvents;

// Use the text below when there are no upcomming events, or the bottom one for an upcoming event
/*
               <Typography variant="h5" style={{ padding: "3px 10px" }} className="AboutUsSmallScreen">
                    {
                        "We currently have no upcoming events (but it's best to check facebook, just in case)"
                    }
                </Typography>

                    <EventItem
                    img="images/EventFreshersFair.svg"
                    date="17/09/19 - 18/09/19"
                    title="Freshers Fair"
                    body=""
                />
*/
