import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './ui-toolkit/css/nm-cx/main.css'
import Ranking from './Ranking'
import Results from "./Results"
import Battle from './Battle'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            <h1 className='App-title'>GitHub Battle</h1>
            <div className='Nav'>
              <ul>
                <li className='heading-nav-entry'>
                  <NavLink exact to='/'>Battle</NavLink>
                </li>
                <li> | </li>
                <li className='heading-nav-entry'>
                  <NavLink to='/Ranking'>Rankings</NavLink>
                </li>
              </ul>
            </div>

          </header>
          <main>
            <Route exact path='/' component={Battle} />
            <Route path='/Ranking' component={Ranking} />
            <Route path='/Results' component={Results} />
          </main>
        </div>
      </Router>
    )
  }
}

// const Battle = props => (
//   <div className="card battleCard">
//     <div className="battleBorder">
//       <h2>Player 1</h2>
//       <p>GitHub Username</p>
//       <input type="text" />
//       <button>Get User</button>
//     </div>
//     <div className="battleBorder">
//       <h2>Player 2</h2>
//       <p>GitHub Username</p>
//       <input type="text" />
//       <button>Get User</button>
//     </div>
//   </div>
// )

export default App
