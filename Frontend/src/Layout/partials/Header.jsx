import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary h-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-2">
                        <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                        <Link className="nav-link" to={'/about'}>About</Link>
                        <Link className="nav-link" to={'auth'}>Sign In</Link>
                        {/* <a className="nav-link disabled" aria-disabled="true">Logout</a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header