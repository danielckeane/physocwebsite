
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
                    className="AboutUsSmallScreen"
                    style={{ padding: "20px 18%", zIndex: "2", "textAlign": "justify" }}
                >
                    {
                        "Hello there! We're Physoc, the Glasgow University physics society.  We have a library which, though not as big as the university's library, still has a fair number of good books.  We also have a common room where we sometimes hold events."
                    }
                </Typography>
                <Typography variant="h6" style={{ margin: "0.2em" }}>
                    {" Our Events "}
                </Typography>
                <div
                    style={{
                        margin: "1em 10em",
                        width: "60%",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                    className="AboutUsSmallScreen"
                >
                    <Grid container spacing="24">
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventLecture.svg"
                                title="Guest Lectures"
                                body="We often hold guest lectures on a wide varity of topics, from dark matter to sports science"
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventBeer.svg"
                                title="Pub Crawls"
                                body="We regularly hold pub crawls where you can meet up and socialise with like minded people"
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventMicrophone.svg"
                                title="Radio Speaker"
                                body="We have podcasts given by various lecturers both from within and without the university"
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventSolarSystem2.svg"
                                title="Team up with other societies"
                                body="We team up with astrosoc and other societies for quiz nights, pub crawls and a variety of other events"
                                imgWidth="50px"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default AboutUs;