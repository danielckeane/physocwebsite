
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

import EventItem from "./EventItem.js";

class UpcomingEvents extends Component {

    render() {
        return (
            <div className="App-content" style={{ backgroundColor: "#2e3440" }} id="UpcomingEvents">
                <Typography variant="h4" style={{ margin: "0.2em" }}>
                    {" Upcoming Events "}
                </Typography>
                <EventItem
                    img="images/EventMeeting.svg"
                    date="09/01/20"
                    title="Some Event"
                    body="Dr XXX is giving a guest lecture on dark matter"
                />
                <Typography variant="h5" style={{ padding: "3px 10px" }} className="AboutUsSmallScreen">
                    {
                        "We currently have no upcoming events (but it's best to check facebook, just in case)"
                    }
                </Typography>
            </div>
        )
    }
}

export default UpcomingEvents;