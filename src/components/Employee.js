import React, {Component} from "react";
import NavBar from "./NavBar";
import Queue from "./Queue";

export class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Staff",
            profilePic: "https://i.imgur.com/3b17daU.jpg"
        }
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <header className="App-header">
                    <img src={this.state.profilePic} width="125px" height="125px" radius="70px" className="profilePic" alt=""></img>
                    <div className="welcome">Welcome, {this.state.username}!</div>
                    <br/><br/>
                    <Queue/>
                </header>
            </div>
        );
    }
}

export default Employee