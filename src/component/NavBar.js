import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                  <Link className="nav-link" rel="noreferrer"  to="/About">About</Link>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/bussiness">Bussiness</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="noreferrer" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
