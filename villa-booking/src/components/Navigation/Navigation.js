import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">Villa Booking</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dining">Dining</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/booknow">Book Now</Link></li>
                <li><Link to="/hospitality">Hospitality</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
