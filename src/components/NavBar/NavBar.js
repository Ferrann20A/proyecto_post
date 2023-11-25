import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul id='menu'>
            <li>
                <Link className='link' to='/'>Home</Link>
            </li>
            <li>
                <Link className='link' to='/formulario'>Formulario</Link>
            </li>
        </ul>
      </div>
    )
  }
}
