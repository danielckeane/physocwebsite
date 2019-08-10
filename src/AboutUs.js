
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import AboutItem from "./AboutItem.js";

class AboutUs extends Component {

    render() {
        return (
            <div className="App-content" id="AboutUs">
                <Typography variant="h4" style={{ zIndex: "2" }}>{" About us "}</Typography>
                <Typography
                    variant="h5"
                    color="text"
                    style={{ padding: "20px 10%", zIndex: "2" }}
                >
                    {
                        "Hello there! We're Physoc, the glasgow university physics society.  We have a libuary which, though not as big as the universities libuary, still has a fair number of good books.  We also have a common room where we sometimes hold events.  The list of events we hold is shown below."
                    }
                </Typography>
                <Typography variant="h6" style={{ margin: "0.2em" }}>
                    {" Our Events "}
                </Typography>
                <div
                    style={{
                        margin: "1em 10em",
                        width: "70%",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                        //backgroundColor: "black"
                    }}
                >
                    <Grid container spacing="24">
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventLecture.svg"
                                title="Guest Lectures"
                                body="We often hold guest lectures on a wide varity of topics, from dark matter to sports science"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/PhysocLogo.svg"
                                title="PUB CRAWLS"
                                body="We regularly hold pub crawls where you can meet up and solialise with like minded people"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/PhysocLogo.svg"
                                title="Some Title"
                                body="This is where the details go"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/PhysocLogo.svg"
                                title="Some Title"
                                body="This is where the details go"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default AboutUs;