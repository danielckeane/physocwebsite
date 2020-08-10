
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import AboutItem from "./AboutItem.js";

class AffiliatedWith extends Component {

    render() {
        return (
            <div
            style={{
              width: "100%",
              backgroundColor: "#2e3440",
              textAlign: "center",
              paddingTop: "0.7em",
              paddingBottom: "0.7em"
  
            }}
          >
            <Typography
              variant="body"
              style={{
                margin: "auto auto",
                color: "#ecefe4",
                fontStyle: "italic"
              }}
            >
              Affiliated with &nbsp;<img
                src={"images/SponsorsIOP.svg"}
                alt={""}
                width="40em"
                style={{ height: "2em", marginTop: "0em", paddingTop: "0em" }}
                />
            </Typography>
          </div>
        )
    }
}

export default AffiliatedWith;