import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src="https://lh3.googleusercontent.com/u6dX8UIBQKvzQNYcBbWNjdVPrctiOmZgvO89r2mEysm-HpM7UXFUxj8W1zoSvFh_myQ"
            width="200px" height="200px"></img>
          <form>
              <label>
                  <div className="formLabel" name="password">email</div>
                  <input type="text" className="field" />
                  <br/><br/>
                  <div className="formLabel">password</div>
                  <input type="text" name="password" className="field" />
              </label>
          <br/><br/>
          <input type="submit" value="submit" className="submitButton"/>
          </form>
      </header>
    </div>
  );
}

export default App;
