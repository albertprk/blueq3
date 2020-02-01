import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login";
import Main from "./components/Main";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch("/api/getList")
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }

    render() {
        const { list } = this.state.list;
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
