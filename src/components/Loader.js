import React, {Component} from "react";
import Spinner from "react-bootstrap/Spinner";

export class Loader extends Component {
    render() {
        return (
            <Spinner animation="border" variant="light" />
        );
    }
}

export default Loader;