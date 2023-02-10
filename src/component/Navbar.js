import {NavLink} from 'react-router-dom'
import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav>
      <NavLink to='/Login'>Login</NavLink>
      <NavLink to='/Dashboard'>Dashboard</NavLink>
    </nav>
    )
  }
}


export default Navbar
