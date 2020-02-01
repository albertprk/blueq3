import React, {Component} from "react";

export class Main extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form>
                        <input type="submit" value="send help request" className="request"/>
                    </form>
                </header>
            </div>
        );
    }
}

export default Main;