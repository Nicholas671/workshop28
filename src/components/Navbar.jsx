import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/rainbow">Rainbow</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/bisque">Bisque</Link>
            <Link to="/orangered">Orangered</Link>
        </div>
    )
}

export default navbar