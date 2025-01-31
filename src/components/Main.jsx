import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Red from './Colors/Red'
import Blue from './Colors/Blue'
import Bisque from './Colors/Bisque'
import Orangered from './Colors/Orangered'
import Rainbow from './Colors/Rainbow'

function Main() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/rainbow" element={<Rainbow />}></Route>
                <Route path="/blue" element={<Blue />}></Route>
                <Route path="/red" element={<Red />}></Route>
                <Route path="/bisque" element={<Bisque />}></Route>
                <Route path="/orangered" element={<Orangered />}></Route>
            </Routes>
        </div>

    )
}

export default Main