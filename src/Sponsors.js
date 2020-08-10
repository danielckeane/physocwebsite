
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";
//import Grid from "@material-ui/core/Grid";

class Sponsors extends Component {

    render() {
        return (
            <div className="App-content" style={{ backgroundColor: "#2e3440" }} id="Sponsors">
                <Typography variant="h4" style={{ zIndex: "2", marginBottom: "1em" }}>{" Sponsors "}</Typography>
                <div
                    style={{
                        margin: "1em 10em",
                        width: "65%",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                    className="AboutUsSmallScreen"
                >
                <Typography variant="h6" style={{  margin: "0 0%" }} className="AboutUsSmallScreen">
                    {
                        "We're currently looking for sponsors!  Feel free to use the above email if you're interested."
                    }
                    </Typography>
                    
                </div>
            </div>
        )
    }
}

/* <img
src={"images/SponsorsIOP.svg"}
alt={""}
width="170em"
style={{ marginBottom: "0em" }}
/>*/

export default Sponsors;