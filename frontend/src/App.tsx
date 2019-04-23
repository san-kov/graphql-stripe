import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <h1>React Stripe</h1>
          <Switch>
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
