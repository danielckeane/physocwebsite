
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

class OurCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ["President", "XXX"],
                ["Secretary", "XXX"],
                ["Treasurer", "XXX"],
                ["Librarian", "XXX"],
                ["OCM", "XXX"],
                ["OCM", "XXX"],
                ["Member", "XXX"],
                ["Member", "XXX"],
            ]
        }

        this.state.htmlMembers = this.state.members.map((item) => {
            return (<div style={{ "padding": "10px 0px" }}><i>{item[0]}</i><pre style={{ "display": "inline" }}> </pre><p style={{ "display": "inline" }}>-  {item[1]} </p></div>)
        })

        /* this.state.htmlMembers = Object.keys(this.state.members).map((key, index) => {
             return (<div style={{ "padding": "10px 0px" }}><i>{key}</i> - <p style={{ "display": "inline" }}> {this.state.members[key]} </p></div>)
         })*/
    }

    render() {
        return (
            <div className="App-content" style={{ backgroundColor: "#3b4252" }} id="OurCommittee">
                <Typography variant="h4" style={{ margin: "0.2em" }}>
                    {" Our Committee "}
                </Typography>
                <Typography variant="h5" style={{ padding: "10px 0" }}>

                    {this.state.htmlMembers}
                </Typography>
            </div>
        )
    }
}

export default OurCommittee;