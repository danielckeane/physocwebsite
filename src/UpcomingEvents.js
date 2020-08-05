
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
                    img="images/EventBeer.svg"
                    date="??/??/2020"
                    title="Annual General Meeting"
                    body="We're having our AGM at some point during the next semester, come along if you want to get more involved and have your say on how the GU Physics Society is run. We have a number of places to fill, so either check here or our facebook for updates."
                />


            </div>
        )
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