import React, {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <a href="http://localhost:3001/" className="NavItema"><div className="NavItem">Logout</div></a>
            </div>
        );
    }
}

export default NavBar