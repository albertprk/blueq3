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
        const App = () => (
            <div>
                <Switch>
                    <Route exact path="/" render={(data) => <Login {...data} isAuthed={true} />}/>
                    <Route path="/employee" component={Employee}/>
                    <Route path="/main" render={(data) => <Main {...data} isAuthed={true} />}/>
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
