import React from 'react'
// impt
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar=${props.mode} bg-${props.mode} `}>
  <div className="container-fluid" >
    <a className="navbar-brand " style = {{color: props.mode==='light' ? 'black' : 'white'}} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item  "  >
          <Link className="nav-link active " aria-current="page" to="/">{props.textUtilsHome}</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/About">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to ="/" >Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>

      <div className={`form-check form-switch text-${props.mode==='dark' ? 'light' : 'dark'}`}>
      <input className="form-check-input " onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault " />
      <label className={`form-check-label text-${props.mode==='dark' ? 'light' : 'dark'}}" htmlFor="flexSwitchCheckDefault`}>Enable Dark Mode</label>
      
      <div className= {`form-check form-switch text-${props.mode === 'dark' || props.mode === 'light' ? 'danger' : 'dark' }`}></div>
      <input className="form-check-input " onClick={props.redMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault1 " />
      <label className= {`form-check-label text-${props.mode === 'dark' || props.mode === 'light' ? 'danger' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Red&Black Mode</label>
</div>
      </form>
    </div>
  </div>
  <br />
</nav>
    </div>
  )
}
// // Sirf title string hosagta not any other type
// Navbar.PropTypes = {
//     title : PropTypes.string,
//     textUtilsHome : PropTypes.string
// }

Navbar.defaultProps = {
    title : "Set Title here",
    textUtilsHome : "Set Home"
} 