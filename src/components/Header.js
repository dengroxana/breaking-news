import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"


function Header() {
  return (
  <header><nav>
    <Link to="/"><h1 className="pageTitle">New York Live</h1></Link>
  </nav>
  
  </header>
  )
}
export default Header