import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login";
import Main from "./components/Main";
import { Route, Switch } from 'react-router-dom';
import {Employee} from "./components/Employee";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    getData = () => {
        fetch("/api/getData")
            .then(res => res.json())
            .then(data => this.setState({ data }))
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        console.log(this.state.data);
        const App = () => (
            <div>
                <Switch>
                    <Route path="/" render={() => <Login data={this.state.data} />} />
                    <Route path="/employee" component={Employee} data={this.state.data} />
                    <Route path="/main" render={() => <Main data={this.state.data} />} />
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}


export default App;
