import React, { Component } from "react";
import App from "../App";
import { Link } from 'react-router-dom';
import NavBarMain from "./NavBarMain";

export class Login extends Component {
    render() {
        return (
            <div className="App">
                <NavBarMain/>
                <header className="App-header">
                    <img src="https://lh3.googleusercontent.com/u6dX8UIBQKvzQNYcBbWNjdVPrctiOmZgvO89r2mEysm-HpM7UXFUxj8W1zoSvFh_myQ"
                         width="200px" height="200px"></img>
                    <form>
                        <label>
                            <div className="formLabel" name="password">email</div>
                            <input type="text" className="field" />
                            <br/><br/>
                            <div className="formLabel">password</div>
                            <input type="password" name="password" className="field" />
                        </label>
                        <br/><br/><br/>
                        <Link to={'./main'}>
                            <input type="submit" value="submit" className="submitButton"/>
                        </Link>
                    </form>
                </header>
            </div>
        );
    }
}

export default Login;