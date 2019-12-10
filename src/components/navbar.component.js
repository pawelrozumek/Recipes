import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div className="container-fluid fixed-top bg-warning shadow-sm">
                <div className="container">
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                        <div className="d-flex flex-grow-1">
                            <span className="w-100 d-lg-none d-block">
                                {/* hidden spacer to center brand on mobile */}
                            </span>
                            <Link to="/" className="navbar-brand" >
                                Cooking Recipes
        </Link>
                            <div className="w-100 text-right">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav m-auto flex-nowrap">
                                <li className="nav-item">
                                    <Link to="/add" className="nav-link">Add Recipe</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link">Sample 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link">Sample 2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link">Sample 3</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* End of Navbar */}
                </div>
            </div>
        );
    };
}
