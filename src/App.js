import Login from "./components/Login";
import Main from "./components/Main";
import { Route, Switch } from 'react-router-dom';
import {Employee} from "./components/Employee";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from './actions/stuffActions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch("/api/getData")
            .then(res => res.json())
            .then(data => this.setState({ data }))
    };

    render() {
        const { data } = this.state;
        console.log(this.state);
        const App = () => (
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/employee" component={Employee}/>
                    <Route path="/main" component={Main} />
                </Switch>
            </div>
        );
        return (
            <Switch>
                <div>{this.props.stuffs}</div>
                <App/>
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {
        stuffs: state.stuffs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
