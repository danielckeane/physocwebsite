import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

class EventItem extends Component {
  render() {
    return (
      <div
        style={{
          margin: "2em auto",
          width: "70%",
          //backgroundColor: "orange",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <img
          src={this.props.img}
          width="60em"
          style={{ marginBottom: "1em" }}
        />
        <Typography variant="h6" style={{ margin: "0" }}>
          {this.props.date}
        </Typography>
        <Typography variant="h6" style={{ margin: "0px 0px", padding: "0px" }}>
          {this.props.title}
        </Typography>
        <Typography variant="body">{this.props.body}</Typography>
        <Divider style={{ marginTop: "1em", height: "3px" }} />
      </div>
    );
  }
}

export default EventItem;
