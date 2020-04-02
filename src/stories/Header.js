import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"


function Header(props) {
  return (
  <header><nav>
    <Link to="/"><h1 className={props.class}>{props.title}</h1></Link>
  </nav>
  
  </header>
  )
}
export default Header