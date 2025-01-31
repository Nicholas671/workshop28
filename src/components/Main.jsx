import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Red from './Red'
import Blue from './Blue'
import Bisque from './Bisque'
import Orangered from './Orangered'

function Main() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue />}></Route>
                <Route path="/red" element={<Red />}></Route>
                <Route path="/bisque" element={<Bisque />}></Route>
                <Route path="/orangered" element={<Orangered />}></Route>
            </Routes>
        </div>

    )
}

export default Main