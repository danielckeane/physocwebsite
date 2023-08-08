
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import AboutItem from "./AboutItem.js";
/* 2d6ec4ff  #5a8ed1ff
                        "We're Physoc, the Glasgow University physics society.  We have a library (Kelvin Bulding, room 332) which, though not as big as the university's library, still has a fair number of good books.  We also have a common room where we sometimes hold events."
*/
                /* f7d9cf  f4a086  ea572a  f24f3a Monoton*/
class AboutUs extends Component {

    render() {
        return (
            <div className="App-content" id="AboutUs">

                <Typography variant="h4" style={{ zIndex: "2", margin: "0.2em"  }} class="titleTextFont">{" About Us "}</Typography>
                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "15px 18% 0px 18%", zIndex: "2", "textAlign": "justify", lineHeight: "1.25" }}
                >
                    {
                        "GU Physoc is dedicated to bringing together fellow physics enthusiasts from across all walks of university life for the celebration and promotion of physics. Whether you are a physics student or just a science enthusiast, GU Physoc is open to all."
                    }
                </Typography>
                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "5px 18% 20px 18%", zIndex: "2", "textAlign": "justify", display: "inline", lineHeight: "1.25" }}
                >
                    {
                "Sign up to GU Physoc to enjoy socials such as our Pub Quiz, Pub & Subcrawls, and ceilidhs, academic events like guest lectures by some of the UK's top physicists, EGM & AGMs to let your voice be heard in relation to our society, and gain access to the Kelvin building student library (Room 332) which includes many of the course textbooks for all Physics levels."
                    }
                </Typography>

                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "5px 18% 20px 18%", zIndex: "2", "textAlign": "justify" }}
                >
                    {
                        "Sign up for membership (2023-2024): "
                    }

                    <a className="AboutUsSmallScreen" href="https://www.glasgowunisrc.org/organisation/7921/ " style={{textDecoration: "none",}}>
                    <Typography variant="h5"
                    color="text"
                    style={{display: "inline", textDecoration: "none", color: "#3479d6ff", textDecorationColor: "transparent"}}>
                        https://forms.gle/dMmRWJFJqfraEeN16 </Typography>
                    </a>
                </Typography>

                <Typography variant="h6" style={{ margin: "0.2em", fontFamily: "Merriweather", color:"#f24f3a", fontSize: "2rem", fontWeight: "Bold" }}>
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
                                body="We often hold guest lectures on a wide varity of topics, from dark matter to the science of star wars."
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventBeer.svg"
                                title="Pub Crawls"
                                body="We regularly hold pub crawls where you can meet up and socialise with like minded people."
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventMicrophone.svg"
                                title="7 Minutes of Science"
                                body="Once a year we bring together a variety of scientists to present their research - in just 7 minutes."
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventSolarSystem2.svg"
                                title="Team up with other societies"
                                body="We team up with astrosoc and other societies for quiz nights, pub crawls and a variety of other events."
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
