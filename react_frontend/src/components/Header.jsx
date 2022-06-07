import React from 'react'

const BASE_URL = 'http://localhost:3000/'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={BASE_URL}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <form className="d-flex">
                                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header