import React, {Component} from "react";
import NavBar from "./NavBar";

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "Albert",
            profilePic: "https://i.imgur.com/rWsf1oK.jpg",
            requesting: false
        }
    }

    handleClickOn = (e) => {
        e.preventDefault();
        this.setState((state, props) => {
            return {requesting: true};
        });
    }

    handleClickOff = (e) => {
        e.preventDefault();
        this.setState((state, props) => {
            return {requesting: false};
        });
    }

    render() {
        if (this.state.requesting == false) {
            return (
                <div className="App">
                    <NavBar/>
                    <header className="App-header">
                        <img src={this.state.profilePic} width="125px" height="125px" radius="70px" className="profilePic"></img>
                        <div className="welcome">Welcome, {this.state.username}!</div>
                        <br/><br/>
                        <form>
                            <input type="submit" value="click to signal team" className="request" onClick={this.handleClickOn}/>
                        </form>
                    </header>
                </div>
            );
        } else {
            return (<div className="App">
                <header className="App-header">
                    <img src={this.state.profilePic} width="125px" height="125px" radius="70px" className="profilePic"></img>
                    <div className="welcome">Welcome, {this.state.username}!</div>
                    <br/><br/>
                    <form>
                        <input type="submit" value="signalling team" className="requesting" onClick={this.handleClickOff}/>
                    </form>
                </header>
            </div>
            );
        }

    }
}

export default Main;