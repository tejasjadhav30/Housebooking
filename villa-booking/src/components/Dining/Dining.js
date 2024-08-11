import React from 'react';
import './Dining.css';
const OutOfTheBlueImage = 'https://media.architecturaldigest.com/photos/5fda4f0e4a39bb8c2fb439bb/master/w_1600%2Cc_limit/YESAD1020_COPELAND_2.jpg';
const AngloIndianImage = 'https://i0.wp.com/www.thelodhi.com/wp-content/uploads/sites/3/2020/10/dining-slider1.jpg?resize=1300%2C730&ssl=1';
const OliveBarImage = 'https://expressinnindia.com/wp-content/uploads/2022/08/ASTER-4-scaled.jpg';

const Dining = () => {
    return (
        <div className="dining-page">
            <h1>Our Properties</h1>
            <h2>DINING</h2>
            <div className="dining-section">
                <div className="dining-item">
                    <img src={OutOfTheBlueImage} alt="Out of the Blue" />
                    <h3>OUT OF THE BLUE</h3>
                    <p>Out of the Blue at Hotel Le Sutra transforms dining by uniting diverse flavors and cultures in an inclusive ambiance.</p>
                    <a href="/discover">Discover More</a>
                </div>
                <div className="dining-item">
                    <img src={AngloIndianImage} alt="Anglo Indian Bistro & Cafe" />
                    <h3>ANGLO INDIAN BISTRO & CAFE</h3>
                    <p>Anglo Indian is a delightful café and restaurant where the fusion of East and West, passion and flavour, tradition and innovation come together to create a unique dining experience.</p>
                    <a href="#anglo-indian">Discover More</a>
                </div>
                <div className="dining-item">
                    <img src={OliveBarImage} alt="Olive Bar & Kitchen" />
                    <h3>OLIVE BAR & KITCHEN</h3>
                    <p>Nestled within Hotel Le Sutra, Mumbai’s Olive Bar and Kitchen is an iconic establishment at the forefront of introducing the city to the captivating world of Mediterranean cuisine.</p>
                    <a href="#olive-bar">Discover More</a>
                </div>
            </div>
        </div>
    );
}

export default Dining;
