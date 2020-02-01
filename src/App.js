import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login";
import Main from "./components/Main";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/main" component={Main}/>
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
