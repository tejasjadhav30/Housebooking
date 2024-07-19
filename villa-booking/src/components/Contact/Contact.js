import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="left-side">
                    <h2>Book Your Stay</h2>
                    <p>Welcome to Blue Ocean Hotel! Our house booking page allows you to reserve your stay with ease. Enjoy luxurious rooms, stunning ocean views, and top-notch amenities. Click the link below to book your stay now!</p>
                    <a href="/booking" className="booking-link">Go to Booking Page</a>
                </div>
                <div className="right-side">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Message:
                            <textarea name="message" required></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="bottom-images">
                <div className="image-row">
                    <img src="https://robbreport.com/wp-content/uploads/2017/11/manzu-exterior-deck-5.jpg?w=1000" alt="Hotel view" className="contact-image" />
                    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" alt="Room view" className="contact-image" />
                </div>
                <div className="image-row">
                    <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dining area" className="contact-image" />
                    <img src="https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Garden view" className="contact-image" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
