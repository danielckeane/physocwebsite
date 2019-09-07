
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
                        //PhysocNewLogoWhiteNoText2, PhysocLogo
                    }}
                />)
        }
    }

    render() {
        return (
            <header className="App-header" id="TopPage">

                {this.state.quarkElements}

                <img src="images/PhysocNewLogoWhiteNoText2.svg" alt="Physoc Logo" width="35%" style={{ position: "relative", zIndex: "2" }} />

                <img
                    src="images/NEONPhysics3.svg"
                    alt="Physoc"
                    style={{
                        marginBottom: "3%",
                        width: "50%",
                        zIndex: "2"
                    }}
                />
                <img
                    src="images/NEONTGUPS2.svg"
                    alt="The Glasgow University Physics Society"
                    className="neon"
                    style={{ marginBottom: "0px", "width": "80%", zIndex: "2" }}
                />
            </header>
        )
    }
}

export default TopPage;