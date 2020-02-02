import React, {Component} from "react";


const NavElement = props => (
    <div className="panel">
        <p className="panelinfo"><b>Customer:</b> {props.queueNames}</p> <br/>
        <p className="panelinfo"><b>Customer Location:</b> {props.location}</p>
    </div>
)

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queueNames: ["Albert", "Janet"],
            queueLocations: ["Lounge", "TV"]
        }
    }

    handleClick = (e) => {
        let array = [...this.state.queueNames]; // make a separate copy of the array
        let index = array.indexOf("0");
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({people: array});
        }
    }

    render() {
            return this.state.queueNames.map((navElement, i) => {
                return (
                    <form onSubmit={this.handleClick}>
                        <NavElement queueNames={this.state.queueNames[i]} location={this.state.queueLocations[i]} onClick={this.handleClick}/>
                    </form>
                    )
            });
    }
}

export default NavBar