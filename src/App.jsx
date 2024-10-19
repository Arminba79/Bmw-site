import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home/Home"

import Items from "./components/Models/Models"
import Aboutus from "./components/Aboutus/Aboutus"
import logo from "./assets/bmwlogo.png"
function App() {
  return (

    <section className="flex flex-wrap  justify-center container-fluid">
      <Router>
        <div id="header" className="navbar bg-black z-40 fixed">
          {/* logo */}
          <div className="flex-1">
            <a className="btn btn-ghost h-full"><img className="w-16" src={logo} alt="" /></a>
          </div>
          {/* menu */}
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-bold text-white">
              <li>
                <Link to='/'>Home</Link>
              </li>

              <li>
                <Link to='/items'>Models</Link>
              </li>

              <li>
                <Link to='/aboutus'>About Us</Link>
              </li>



            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/aboutus" element={<Aboutus />} />
 


        </Routes>
      </Router>

    </section>

  )
}

export default App