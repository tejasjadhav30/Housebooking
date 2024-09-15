import React from 'react';
import './Hospitality.css';

const Hospitality = () => {
    return (
        <div className="hospitality">
            <div className="hero-banner">
                <h1>Explore the Finest Vilhas</h1>
                <p>Experience luxury and tradition at our premium Vilhas.</p>
            </div>

            <div className="vilha-section">
                <div className="vilha-header">
                    <h2>Vilha Blue Ocean</h2>
                    <button className="book-now">Book Now</button>
                </div>
                <p>
                    Nestled in a serene location near the coastal plains, Vilha Blue Ocean offers a retreat blending luxury with nature. Each suite is designed to provide a peaceful, cultural experience with high-end amenities.
                </p>
                <div className="images">
                    <img src="/Vilha_p/IMG-20240904-WA0021.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0012.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0010.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0044.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0002.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0047.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0015.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0033.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                    <img src="/Vilha_p/IMG-20240904-WA0027.jpg" alt="Vilha Blue Ocean" className="vilha-image" />
                </div>
                <div className="specialty">
                    <p>Specialty: A luxurious retreat that offers a harmonious blend of nature and elegance.</p>
                </div>
                <div className="user-reviews">
                    <p>Rated 4.8/5 from 1200 reviews</p>
                </div>
            </div>

            <div className="vilha-section">
                <div className="vilha-header">
                    <h2>Andhra Heritage Vilha</h2>
                    <button className="book-now">Book Now</button>
                </div>
                <p>
                    Located in Visakhapatnam, Andhra Heritage Vilha immerses you in the rich traditions of Andhra Pradesh. Each suite is a masterpiece, decorated with intricate hand-crafted artwork by local artisans.
                </p>
                <div className="images">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/6b/40/06/keys-cafe-buffet.jpg?w=1100&h=-1&s=1" alt="Andhra Heritage Vilha" className="vilha-image" />
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1e/a4/1f/keys-hotel-pimpri-pune.jpg?w=1200&h=-1&s=1" alt="Andhra Heritage Vilha" className="vilha-image" />
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1e/a4/3f/keys-hotel-pimpri-pune.jpg?w=1200&h=-1&s=1" alt="Andhra Heritage Vilha" className="vilha-image" />
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/65/df/86/keys-hotel-pimpri-pune.jpg?w=1200&h=-1&s=1" alt="Andhra Heritage Vilha" className="vilha-image" />
                    <img src="https://media.istockphoto.com/id/501386854/photo/tropical-modern-villa.jpg?s=612x612&w=0&k=20&c=791hJ7BkqtFRvqqu7Ke6Hourkfg3lkNy5OQWrCz76UY=" alt="Andhra Heritage Vilha" className="vilha-image" />
                    
                    <img src="/Vilha_p/IMG-20240904-WA0007.jpg" alt="Andhra Heritage Vilha" className="vilha-image" />
                </div>
                <div className="specialty">
                    <p>Specialty: A cultural hub that highlights Andhra Pradesh’s traditional art and craftsmanship.</p>
                </div>
                <div className="user-reviews">
                    <p>Rated 4.7/5 from 980 reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Hospitality;
