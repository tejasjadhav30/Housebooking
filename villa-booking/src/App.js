import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Dining from './components/Dining/Dining';
import Contact from './components/Contact/Contact';
import BookNow from './components/BookNow/BookNow';
import Hospitality from './components/Hospitality/Hospitality';

function App() {
    return (
        <Router>
            <div className="app">
                <Navigation />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dining" element={<Dining />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booknow" element={<BookNow />} />
                    <Route path="/hospitality" element={<Hospitality />} />
                </Routes>
                <br></br><br></br><br></br><br></br><br></br>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
