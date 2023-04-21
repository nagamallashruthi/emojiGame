// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    return (
      <navbar>
        <div className="navbar">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="img"
            />
            <p className="para">Emoji Game</p>
          </div>
          <div className="p">
            <p className="para">Score:0</p>
            <p className="para1">Top Score:0</p>
          </div>
        </div>
      </navbar>
    )
  }
}
export default NavBar
