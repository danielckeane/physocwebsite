
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

class OurCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ["President\t", "Liam Brown"],
                ["Secretary\t", "Gediminas Glemza"],
                ["Treasurer\t", "Terry Millen"],
                ["Social Events Convenor", "Rachel park"],
                ["Physics Events Convenor", "Elliot Bourke"],
                ["Publicity Officer\t", "Calum Gordon"],
                ["Librarian\t", "Philip Binner"],
                ["Second Year Rep", "Aurys Silinga"],
                ["First Year Rep", "XXX"],
                ["OCM\t", "Andrew Quinn, Noah Upton"]

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