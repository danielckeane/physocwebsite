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

        <a href="https://www.glasgowunisrc.org/events/7921/2158/" style={{textDecoration: "none", color: "#ecefe4"}}>
        <EventItem
                    img="images/RedQuark3.svg"
                    date="Monday 02/10 - 6pm"
                    title="EGM"
                    location="Adam Smith Building 711"
                    body="Join us for our Extraordinary General Meeting where we discuss our plans for the upcoming year!"
                />
                </a>
/*
        <EventItem
                    img="images/EventBeer.svg"
                    date="Tuesday 19/09"
                    title="Beer and Doughnuts"
                    location="Kelvin Building Common Room"
                    body="Perhaps one of our most famous events, we are excited for another Beer and Doughnuts at the start of the academic year. Join us for a fun quiz with free beer and doughnuts and get to know your fellow physicists!"
                /> */
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
