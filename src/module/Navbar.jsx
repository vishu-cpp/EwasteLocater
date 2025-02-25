import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-success  shadow-lg p-3 mb-4 bg-body rounded ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="#">
            <img src="https://seeklogo.com/images/E/e-waste-recycling-in-uae-logo-33A8B7C3F1-seeklogo.com.png" width="60px " height=" 60px" alt=""></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active fw-bolder px-3" aria-current="page" to="/">Home</Link>
              <Link className="nav-link fw-bolder px-3 " to="/e-waste">Marketplace</Link>
              <Link className="nav-link fw-bolder px-3" to='/calculator  '>Calculator</Link>
              <Link className="nav-link fw-bolder px-3" to="/Faq">FAQs</Link>
              {/* <div ><Link className='nav-link fw-bolder px-3' to='/login'>Login</Link></div> */}
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
