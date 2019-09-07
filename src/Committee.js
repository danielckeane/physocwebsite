
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

class OurCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ["President", "Andrew Quinn"],
                ["Secretary", "Gediminas Glemza"],
                ["Treasurer", "Elliot Bourke"],
                ["Social Events Convenor", "Rachel park"],
                ["Physics Events Convenor", "Philip Binner"],
                ["Publicity Officer", "Jason Mill"],
                ["Librarian", "XXX"],
                ["Second Year Rep", "XXX"],
                ["First Year Rep", "XXX"],
                ["OCM", "Richard Menzies, Noah Upton"]

            ]
        }

        this.state.htmlMembers = this.state.members.map((item) => {
            return (<div className="CommitteePaddingHeadingSmallScreen" style={{ "padding": "10px 0px" }}><i>{item[0]}</i>
                <pre className="NotDisplayOnSmallScreens" style={{ "display": "inline" }}> - </pre>
                <p className="DisplayBlockOnSmallScreens CommitteePaddingPersonSmallScreen" style={{ "display": "inline" }}>{item[1]} </p></div>)
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
                <Typography variant="h5" className="CommitteeAlignCentreSmallScreen" style={{ padding: "10px 0", textAlign: "left" }}>

                    {this.state.htmlMembers}
                </Typography>
            </div>
        )
    }
}

export default OurCommittee;