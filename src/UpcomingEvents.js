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
                    date="Tuesday 14/11 - 6pm"
                    title="LaTeX Tutorial"
                    location="Kelvin Building Computer Cluster 333"
                    body="A relaxed tutorial for complete beginners! No equipment needed!"
                />
        </a>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVlgRM6s7NJb3eiT5IUzoV2Jd-kakyxQIUWHDxbO00oWoXHQ/viewform" style={{textDecoration: "none", color: "#ecefe4"}}>
        <EventItem
                    img="images/RedQuark3.svg"
                    date="Tuesday 21/11 - 8pm"
                    title="WiSTEM x PhySoc Christmas Ceilidh"
                    location="QMU hall"
                    body="PhySoc and WiSTEM are joining forces to bring you a fun end of semester ceilidh! Tickets are £8.50 and can be bought by clicking on this event! WiSTEM will be donating any profits to Glasgow Women's Aid!"
                /></a>

        <EventItem
                    img="images/RedQuark3.svg"
                    date="Wednesday 22/11 - 6pm"
                    title="'The Wibbly-Wobbly Timey-Wimey Physics of Doctor Who' - by Peter H. Sneddon"
                    location="Adam Smith Building 915"
                    body="Time travel, space travel, mad computers intent on taking over the world... for very nearly 60 years Dr Who has embraced the “science” in “science-fiction”. In this presentation, we’ll look at a selection of times that physics has played a part in the Doctors adventures. We’ll look at how time travel could work, just how much thrust do you need to elevate a Dalek, could a Sonic Screwdriver work and more..."
                />
        <a href="https://www.glasgowsciencecentre.org/whats-on/science-lates-winter-wonderland" style={{textDecoration: "none", color: "#ecefe4"}}>
        <EventItem
                    img="images/RedQuark3.svg"
                    date="Saturday 09/12 - 6pm"
                    title="Science Lates - Winter Wonderland"
                    location="Glasgow Science Center"
                    body="Join us for some sciency fun after-hours! We'll be selling some subsidised tickets for members only - if you are a member, you'll be receiving a ticket link via email! Of course you are also welcome to get your own ticket and still join us! Click on this event for more info!"
                /></a>

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
