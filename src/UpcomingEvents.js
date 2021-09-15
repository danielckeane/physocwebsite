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
        <a href="https://www.facebook.com/events/4051632341613682" style={{textDecoration: "none", color: "#ecefe4"}}>
        <EventItem
                    img="images/EventBeer.svg"
                    date="17/09/19 | 21:00"
                    title="Pub Quiz"
                    body="We'll be having out (Virtual) annual pub quiz with Astrosoc on Friday, come along to meet fellow physists and astronomers and test your trivia knowledge. Find the zoom link and more info on our facebook"
                />
                </a>
                        <EventItem
                    img="images/RedQuark3.svg"
                    date="23/09/19 | 18:00"
                    title="EGM"
                    body="We'll be having an extraordinery general meeting on Wednesday 23rd September.  Come along to have your say in how the club is run or if you want to run for a position on the committee. Currently available positions are OCM, First Year Rep and Publisist.  Zoom link will be sent to members by email"
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
