
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

//style={{ backgroundColor: "#2e3440" }}
//backgroundColor: "#2e3440",
class OurCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ["President", "Lewis Hannah"],
                ["Secretary", "Richard Menzies (also webmaster)"],
                ["Treasurer", "Yara Bakour"],
                ["Social Events Convenor", "Frances Berslin"],
                ["Physics Events Convenor", "x"],
                ["Publicity Officer", "x"],
                ["Librarian", "Christine Mayer"],
                ["Second Year Rep", "Lucy Joyce (also IOP liaison officer)"],
                //["First Year Rep", ""],
                ["OCM", "Conor Lyons | Agrim Jain | x"]

            ]
        }

        this.state.htmlMembers = this.state.members.map((item) => {
            return (<div className="CommitteePaddingHeadingSmallScreen CommitteeAlignCentreSmallScreen" style={{ "padding": "10px 0px", "margin": 0, "textAlign": "left"}}>
                <i className="CommitteeListTitle">{item[0]}</i>
                <p className="DisplayBlockOnSmallScreens CommitteePaddingPersonSmallScreen CommitteeAlignCentreSmallScreen" style={{ "display": "inline","textAlign": "right" }}>{item[1]} </p></div>)
        })
    }

    render() {
        return (
            <div className="App-content" style={{  position: "relative" }} id="OurCommittee">
                <Typography variant="h4" style={{ margin: "0.2em" }}>
                    {" Our Committee "}
                </Typography>
                <Typography variant="h5" className="CommitteeAlignCentreSmallScreen CommitteeList">
                    {this.state.htmlMembers}
                </Typography>
                <img
                    src="images/Telescope.svg"
                    alt=""
                    style={{
                        position: "absolute",
                        alignItems: "left",
                        float: "left",
                        right: "7em",
                        top: "10%",
                        width: "120px",
                        zIndex: "-1"
                    }}
                />

                <img
                    src="images/OldLogoGreen.svg"
                    alt=""
                    style={{
                        position: "absolute",
                        alignItems: "left",
                        float: "left",
                        left: "4%",
                        bottom: "10%",
                        width: "200px",
                        zIndex: "-1"
                    }}
                />

            </div>
        )
    }
}

export default OurCommittee;
/* 2019/2020
            members: [
                ["President", "Andrew Quinn"],
                ["Secretary", "Gediminas Glemza"],
                ["Treasurer", "Elliot Bourke"],
                ["Social Events Convenor", "Rachel park"],
                ["Physics Events Convenor", "Philip Binner"],
                ["Publicity Officer", "Jason Mill"],
                ["Librarian", "Aurys Silinga"],
                ["Second Year Rep", ""],
                ["First Year Rep", "Christiane Mayer"],
                ["OCM", "Richard Menzies(Webmaster), Matthew Palmer"]

            ]
*/