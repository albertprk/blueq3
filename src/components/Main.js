import React, {Component} from "react";

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "Albert",
            profilePic: "https://i.imgur.com/rWsf1oK.jpg"
        }
    }

    handleClickOn = (e) => {

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.state.profilePic} width="125px" height="125px" radius="70px" className="profilePic"></img>
                    <div className="welcome">Welcome, {this.state.username}!</div>
                    <br/><br/>
                    <form>
                        <input type="submit" value="blue shirt signal" className="request" onClick={this.handleClickOn}/>
                    </form>
                </header>
            </div>
        );
    }
}

export default Main;