import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

import EventItem from "./EventItem.js";

class UpcomingEvents extends Component {
  render() {
    return (
      <div
        className="App-content"
        style={{ backgroundColor: "#2e3440" }}
        id="UpcomingEvents"
      >
        <Typography variant="h4" style={{ margin: "0.2em" }}>
          {" Upcoming Events "}
        </Typography>
        <EventItem
          img="images/EventSolarSystem.svg"
          date="19/12/2020 | ??"
          title="Kitchen Experiments"
          body="Ever been interested in doing your own experiments, at home, with reasonable equipment?  We're running an event directly for this!  Come along if you want have some fun making your own Physics experiments at home."
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
