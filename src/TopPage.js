
import React, { Component } from "react";
import "./App.css";

class TopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quarkColors: ["BlueQuark3", "GreenQuark3", "RedQuark3"],
            quarkElements: []
        }
        for (var i = 0; i < 12; i++) {
            this.state.quarkElements.push(
                <img
                    className="Quark"
                    src={"images/" + this.state.quarkColors[Math.round(Math.random() * 2)] + ".svg"}
                    //width= //"80em"
                    alt=""
                    style={{
                        width: `calc(5% + ${(Math.random()) * 3}%)`,
                        top: `calc(10% + ${(Math.random()) * 80}%)`,
                        left: `calc(10% + ${(Math.random()) * 80}%)`,
                        animationDelay: `calc(-${Math.random() * 120}s)`
                        //transform: `rotate(20deg)`
                        //transform: `rotate(calc(${Math.round(Math.random()) * 360}deg))`
                    }}
                />)
        }
    }

    render() {
        return (
            <header className="App-header">

                {this.state.quarkElements}

                <img src="images/PhysocLogo.svg" width="10%" style={{ position: "relative", zIndex: "2" }} />

                <img
                    src="images/NEONPhysics2.svg"
                    style={{
                        marginBottom: "3%",
                        width: "50%",
                        zIndex: "2"
                    }}
                />
                <img
                    src="images/NEONTGUPS.svg"
                    className="neon"
                    style={{ marginBottom: "0px", "width": "80%", zIndex: "2" }}
                />
            </header>
        )
    }
}

export default TopPage;