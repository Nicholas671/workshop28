import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'

function App() {


  return (
    <>
      <div id="container">


        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />}></Route>
            <Route path="/red" element={<Red />}></Route>
          </Routes>
        </div>


      </div>
    </>
  )
}

export default App
