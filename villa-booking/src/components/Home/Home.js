import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to Our Villa</h1>
                <p>Your perfect getaway awaits</p>
            </header>
            <section className="gallery-section">
              
                <Carousel
                      showThumbs={false}
                      autoPlay={true}
                      infiniteLoop={true}
                      interval={3000}
                      emulateTouch={true}
                      swipeable={true}
                      dynamicHeight={false}
                >
                    <div>
                        <img src='https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg' alt="Gallery Image 1" />
                    </div>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRob-uv1HVdeHUvkhFIg7LsN52MJ3cqeLmt0Q&s' alt="Gallery Image 2" />
                    </div>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SoaAgzenl-p-AXpMef5wDqnOfrtK1jUIjQ&s' alt="Gallery Image 3" />
                    </div>
                </Carousel>
            </section>
            <section className="room-section">
            <h2>Gallery</h2>
                <div className="room-card">
                    <img src='https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg' alt="Luxurious Suite" className="room-image" />
                    <div className="room-info">
                        <h2>Luxurious Suite</h2>
                        <p>Experience the ultimate in luxury with our spacious and elegantly designed suite. Perfect for couples and families.</p>
                    </div>
                </div>
                <div className="room-card">
                    <img src='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/14143345/Luxury-villas-1600x900.jpg' alt="Deluxe Room" className="room-image" />
                    <div className="room-info">
                        <h2>Deluxe Room</h2>
                        <p>Our deluxe rooms offer a blend of comfort and style, with stunning views and premium amenities.</p>
                    </div>
                </div>
                <div className="room-card">
                    <img src='https://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/16:9/w_1920,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpghttps://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/16:9/w_1920,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpg'alt="Standard Room" className="room-image" />
                    <div className="room-info">
                        <h2>Standard Room</h2>
                        <p>Enjoy a cozy stay in our standard rooms, designed with modern touches and convenient features.</p>
                    </div>
                </div>
                <div className="room-card">
                    <img src='https://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/16:9/w_1920,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpghttps://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/16:9/w_1920,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpg'alt="Standard Room" className="room-image" />
                    <div className="room-info">
                        <h2>Standard Room</h2>
                        <p>Enjoy a cozy stay in our standard rooms, designed with modern touches and convenient features.</p>
                    </div>
                </div>
                <div className="room-card">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQfEg490747SU48b4dumaWbQzFlWKWryKlg&s'alt="Standard Room" className="room-image" />
                    <div className="room-info">
                        <h2>Standard Room</h2>
                        <p>Enjoy a cozy stay in our standard rooms, designed with modern touches and convenient features.</p>
                    </div>
                </div>
                <div className="room-card">
                    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Feffectmagazine.effetto.com%2F5-most-beautiful-villas-and-the-designers-behind-them%2F&psig=AOvVaw1Ov9nru9lAOKlp3GDOZ3Gi&ust=1723268991706000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLijmrKb54cDFQAAAAAdAAAAABBJhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfSCGzb4WYykSXkDtAPudiL_glFwDPJ5YkQ&s'alt="Standard Room" className="room-image" />
                    <div className="room-info">
                        <h2>Standard Room</h2>
                        <p>Enjoy a cozy stay in our standard rooms, designed with modern touches and convenient features.</p>
                    </div>
                </div>
            </section>
            
            <section className="info-section">
                <div className="info-image">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SoaAgzenl-p-AXpMef5wDqnOfrtK1jUIjQ&s' alt="Our Villa" />
                </div>
                <div className="info-text">
                    <h2>About Us</h2>
                    <p>At our villa, we offer a unique blend of comfort and luxury, with personalized service and an inviting atmosphere. Our rooms are thoughtfully designed to provide you with an unforgettable stay.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
