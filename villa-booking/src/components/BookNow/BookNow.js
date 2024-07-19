import React from 'react';
import './BookNow.css';

const BookNow = () => {
    return (
        <div className="book-now-page">
            <header className="book-now-header">
                <h1>Book Your Stay</h1>
                <p>Find your perfect room with us</p>
            </header>
            <div className="booking-form">
                <div className="form-group">
                    <label htmlFor="check-in">CHECK IN</label>
                    <input type="date" id="check-in" name="check-in" defaultValue="2024-07-19" />
                </div>
                <div className="form-group">
                    <label htmlFor="check-out">CHECK OUT</label>
                    <input type="date" id="check-out" name="check-out" defaultValue="2024-07-20" />
                </div>
                <div className="form-group">
                    <label htmlFor="room">ROOM</label>
                    <input type="text" id="room" name="room" readOnly value="1 Room, 2 Adult, 0 Child" />
                </div>
                <button className="search-button">Search</button>
                <div className="rooms-available">
                    <h2>Last 5 Rooms</h2>
                    <div className="room-card">
                        <img src="https://assets.architecturaldigest.in/photos/600836aef93542952b66522e/16:9/w_2560%2Cc_limit/monsoon-menu-featured-image-1366x768.jpg" alt="Rajas Room" className="room-image" />
                        <div className="room-info">
                            <h3>Rajas</h3>
                            <p>Complimentary Wi-Fi</p>
                            <p className="room-description">Rajas Vibrant, Action, Passion, Vivacious, Stylish Rajas leads one to action. It is the force that creates desires for acquiring new things which leads one to activity and expansiveness.</p>
                            <button className="view-amenities">View Amenities</button>
                        </div>
                    </div>
                    <div className="package-list">
                        <div className="package-item">
                            <img src="https://assets.architecturaldigest.in/photos/600836aef93542952b66522e/16:9/w_2560%2Cc_limit/monsoon-menu-featured-image-1366x768.jpg" alt="Honeymoon Package" className="package-image" />
                            <h3>Honeymoon Package</h3>
                            <p>Room(s): 2</p>
                            <p>1 Room per night</p>
                            <p>INR 9,660 Tax Exclusive</p>
                            <button className="book-button">Book</button>
                        </div>
                        <div className="package-item">
                            <img src="https://assets.architecturaldigest.in/photos/600836aef93542952b66522e/16:9/w_2560%2Cc_limit/monsoon-menu-featured-image-1366x768.jpg" alt="Breakfast Package" className="package-image" />
                            <h3>Breakfast</h3>
                            <p>Room(s): 2</p>
                            <p>1 Room per night</p>
                            <p>INR 10,700 Tax Exclusive</p>
                            <button className="book-button">Book</button>
                        </div>
                        <div className="package-item">
                            <img src="https://assets.architecturaldigest.in/photos/600836aef93542952b66522e/16:9/w_2560%2Cc_limit/monsoon-menu-featured-image-1366x768.jpg" alt="Monsoon Package" className="package-image" />
                            <h3>Monsoon Package</h3>
                            <p>Room(s): 2</p>
                            <p>1 Room per night</p>
                            <p>INR 11,500 Tax Exclusive</p>
                            <button className="book-button">Book</button>
                        </div>
                    </div>
                    <button className="view-more">View More</button>
                </div>
                <div className="property-details">
                    <h2>Property Details</h2>
                    <img src="https://assets.architecturaldigest.in/photos/600836aef93542952b66522e/16:9/w_2560%2Cc_limit/monsoon-menu-featured-image-1366x768.jpg" alt="Property Image" className="property-image" />
                    <p>Le Sutra Art at Le Sutra- offers Inclusive of Breakfast and Free WI-FI. The 16 rooms at Le Sutra are based on 'characters' (Ravana, Ashoka, Buddha) or 'characteristics' (sensuality, love, purification) inspired by Indian mythos. Every room is a virtual canvas where the story forms the guest experience. It is subtly composed through art - paintings, artifacts, chairs, inlays, and sculptures; narrating their part, showcasing diverse themes and philosophies.</p>
                </div>
                {/* <footer className="footer">
                    <p>Home | About Us | Terms & Conditions | Privacy Policy | Payment Terms</p>
                </footer> */}
            </div>
        </div>
    );
}

export default BookNow;
