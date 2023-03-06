import React from 'react';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return (
       <header>
            <div className='d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white'>
                <h4 className='mr-md-auto'>
                    <a href="/" className="text-decoration-none text-white">BOOKS</a>
                </h4>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
       </header>
    );
}

export default NavBar;
