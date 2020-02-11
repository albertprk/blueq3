import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            points: 0,
            profilePic: ""
        }
    }

    componentDidMount() {
        console.log(this.props.data);
        console.log(Object.keys(this.props.data));
    }

    handleUsernameChange = (e) => {
        e.preventDefault();
        this.setState({
            username: e.target.value
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const usernames = Object.keys(this.props.data);
        console.log("USERNAME: " + this.state.username);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p className="headerq3">Blue Q3</p>
                    <p className="headerq3sub">Query Queue Quest</p>
                    <img src="https://lh3.googleusercontent.com/u6dX8UIBQKvzQNYcBbWNjdVPrctiOmZgvO89r2mEysm-HpM7UXFUxj8W1zoSvFh_myQ"
                         width="100px" height="100px" alt=""/><br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className="formLabel">email</div>
                            <input type="text" id="username" className="field" onChange={this.handleUsernameChange}/>
                            <br/><br/>
                            <div className="formLabel">password</div>
                            <input type="password" name="password" className="field" onChange={this.handlePasswordChange} />
                        </label>
                        <br/><br/><br/>
                        <input type="submit" value="submit" className="submitButton"/>
                    </form>
                </header>
            </div>
        );
    }
}

export default Login;