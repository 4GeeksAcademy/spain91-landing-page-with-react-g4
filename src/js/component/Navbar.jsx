import React from "react";

export const Navbar = () => {
    return (
        <div className="container">
            <ul className="nav justify-content-end bg-dark color-primary">
                <a className="navbar-brand  me-auto ms-1 mt-2 text-light align-start" href="#">Start Bootstrap</a>
                <li className="nav-item">
                    <a className="nav-link text-light " href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};
