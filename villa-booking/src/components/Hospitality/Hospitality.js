import React from 'react';
import './Hospitality.css';

const Hospitality = () => {
    return (
        <div className="hospitality">
            <h1>Hospitality</h1>
            
            <div className="hotel-section">
                <h2>Hotel Blue Ocean</h2>
                <p>
                    Located in the heart of Mumbai, Hotel Hotel Blue Ocean is the world’s first Indian art hotel, celebrated for its vibrant blend of art, philosophy, and Indian mythology. Each room is uniquely themed and meticulously decorated to provide an immersive cultural experience.
                </p>
                <div className="images">
                    <img src="https://as2.ftcdn.net/v2/jpg/07/31/40/71/1000_F_731407134_QMiBElpT0ybx98E7Do01HtCMKCmyBONU.jpg" alt=" Hotel Blue Ocean" className="hotel-image" />
                    <img src="https://media.gettyimages.com/id/1321598038/photo/modern-luxury-holiday-villa-at-seaside.jpg?s=612x612&w=0&k=20&c=teTOgGgaQaL3Et0-vUcFTKcGR5HegeBQjPfPC5Xo_o8=" alt="Hotel Blue Ocean" className="hotel-image" />
                    <img src="https://t3.ftcdn.net/jpg/01/93/31/14/240_F_193311419_CwtWsdvQ88oxnGxmtBfkHtIi8Wa2jHJl.jpg" alt="Hotel Blue Ocean" className="hotel-image" />
                    <img src="https://timber.mhmcdn.com/public/member/891454/thumb/2939f6a9-26d5-43cb-bcd7-6538c2c8d984-w300-p1.jpg" alt="Hotel Blue Ocean" className="hotel-image" />
                </div>
                <p>
                    Specialty: An artistic retreat that offers a unique blend of luxury and Indian cultural heritage.
                </p>
            </div>

            <div className="hotel-section">
                <h2>Andhra Art & Craft Hotel</h2>
                <p>
                    Situated in Visakhapatnam, Andhra Art & Craft Hotel is renowned for showcasing the rich artistic traditions of Andhra Pradesh. The hotel features bespoke rooms, each curated by local artisans to highlight the region’s cultural craftsmanship.
                </p>
                <div className="images">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/6b/40/06/keys-cafe-buffet.jpg?w=1100&h=-1&s=1" alt=" Hotel Blue Ocean" className="hotel-image" />
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1e/a4/1f/keys-hotel-pimpri-pune.jpg?w=1200&h=-1&s=1" alt="Hotel Blue Ocean" className="hotel-image" />
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1e/a4/3f/keys-hotel-pimpri-pune.jpg?w=1200&h=-1&s=1" alt="Hotel Blue Ocean" className="hotel-image" />
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/65/df/86/keys-hotel-pimpri-pune.jpg?w=1200&h=-1&s=1" alt="Hotel Blue Ocean" className="hotel-image" />
                </div>
                <p>
                    Specialty: A heritage hotel that offers an authentic experience of Andhra Pradesh’s traditional arts and crafts.
                </p>
            </div>
        </div>
    );
}

export default Hospitality;
