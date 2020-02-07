import React, {Component} from "react";
import NavBar from "./NavBar";

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Albert",
            profilePic: "https://i.imgur.com/3b17daU.jpg",
            points: 0,
            requesting: false,
            location: ""
        };
        console.log("TEST");
        console.log("DATA: " + this.state.data);
    }

    handleClickOn = (event) => {
        event.preventDefault();
        console.log(event.target.selected);
        this.setState(
            {
                location: event.target.value,
                requesting: true
            });
    }

    handleClickOff = (e) => {
        e.preventDefault();
        this.setState((state, props) => {
            return {requesting: false};
        });
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        if (this.state.requesting === false) {
            return (
                <div className="App">
                    <NavBar/>
                    <header className="App-header">
                        <img src={this.state.profilePic} width="125px" height="125px" radius="70px" className="profilePic" alt=""></img>
                        <div className="welcome">Welcome, {this.state.username}!</div>
                        <br/><br/>
                        <form className="form" onSubmit={(event) => this.handleClickOn(event)}>
                            <div className="locationtext">What section of the store are you located?</div>
                            <select className="location">
                                <option value="Lounge">Lounge</option>
                                <option value="TV">TV</option>
                                <option value="Apple">Apple</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Audio">Audio</option>
                            </select><br/><br/>
                            <input type="submit" value="click to signal team" className="request"/>
                        </form>
                    </header>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <NavBar/>
                    <header className="App-header">
                        <img src={this.state.profilePic} width="125px" height="125px" radius="70px" className="profilePic" alt=""></img>
                        <div className="welcome">Welcome, {this.state.username}!</div>
                        <br/><br/>
                        <div className="onwaytext">Sit tight! An expert is on the way to help you!</div>
                        <div className="onwaytextsub">(You can click the button again to cancel your request)</div>
                        <br/><br/>
                        <form>
                            <input type="submit" value="signalling team!" className="requesting" onClick={this.handleClickOff}/>
                        </form>
                    </header>
                </div>
            );
        }

    }
}

export default Main;