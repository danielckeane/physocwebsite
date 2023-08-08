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
        <a href="https://www.facebook.com/events/4051632341613682" style={{textDecoration: "none", color: "#ecefe4"}}>
        <EventItem
                    img="images/RedQuark3.svg"
                    date="date to be confirmed"
                    title="Fresher's Fayre"
                    body="Stop by our stall during fresher's fayre to join our society, ask us questions about what we do or just for a quick chat. We'll be there all day and are excited to meet you!S"
                />
                </a>
        <EventItem
                    img="images/EventBeer.svg"
                    date=" date to be confirmed"
                    title="Beer and Doughnuts"
                    body="Perhaps one of our most famous events, we are excited for another Beer and Doughnuts at the start of the academic year. Join us for a fun quiz with free beer and doughnuts and get to know your fellow physicists!"
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
