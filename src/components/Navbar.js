import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export default function Navbar(props) {
  return (

<>
    <div >
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      {/* <!-- Example single danger button --> */}
<div className="btn-group mx-3">
  <button type="button" className="btn dropdown-toggle mx-1" id='select' data-bs-toggle="dropdown" aria-expanded="false">
    Select Theam
  </button>
  <ul className="dropdown-menu text-center">
    <li><a className="dropdown-item" id='green' href="/" onClick={props.changeTheam}>Green</a></li>
    <li><a className="dropdown-item" id='blue' href="/" onClick={props.changeTheam1}>Blue</a></li>
    <li><a className="dropdown-item" id='red' href="/" onClick={props.changeTheam2}>Red</a></li>
  </ul>
</div>
      

     


      <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'}mode</label>
    </div>
    
    </div>
  </div>
</nav>
    </div>
  
  </>)
}

Navbar.propTypes = {
                    title: PropTypes.string,
                    about: PropTypes.string
                    }

Navbar.defaultProps = {
                        title: 'Set Title here',
                        about: 'Set About Here'

                    }