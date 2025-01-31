import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Red from './Red'
import Blue from './Blue'

function Main() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue />}></Route>
                <Route path="/red" element={<Red />}></Route>
            </Routes>
        </div>

    )
}

export default Main