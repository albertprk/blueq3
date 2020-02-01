import React, {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <a href="http://localhost:3000/" className="NavItema">Home</a>
                <a href="http://localhost:3000/" className="NavItema">About</a>
            </div>
        );
    }
}

export default NavBar