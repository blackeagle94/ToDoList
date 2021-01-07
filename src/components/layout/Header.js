import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link style={linkStyle} to='/'>Home</Link> |  <Link style={linkStyle} to='/about'>About</Link>

            </header>
        )
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff'
}

export default Header
