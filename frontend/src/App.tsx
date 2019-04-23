import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
