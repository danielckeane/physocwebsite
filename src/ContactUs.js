
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

//import EventItem from "./EventItem.js";
//backgroundColor: "#2e3440"
class ContactUs extends Component {

    render() {
        return (
            <div className="App-content" style={{  }} id="ContactUs">
                <Typography variant="h4" style={{ margin: "0.2em" }}>
                    {" Contact Us "}
                </Typography>
                <Typography variant="h5" style={{ padding: "15px 10px",  color: "#bf616a" }} className="AboutUsSmallScreen">
                    
                        guphysoc@gmail.com &nbsp;<p style={{ "display": "inline", "fontWeight": "bold", "color": "#ecefe4" }}>|</p> &nbsp; 
                        <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }}>
                        Facebook
                        </a>
                    
                </Typography>

                <Typography variant="h6" style={{ padding: "15px 10px", margin: "0 20%" }} className="AboutUsSmallScreen">
                    {
                        "We're also in the library between 12:00 - 14:00 every weekday during term time, so you can come find us there as well."
                    }
                </Typography>


            </div>
        )
    }
}

export default ContactUs;

/*
                <Typography variant="h5" style={{ padding: "15px 10px" }} className="AboutUsSmallScreen">
                    <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }}>
                    Facebook
                    </a>
                </Typography>
*/