import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import CartPage from './Components/Cart Page/Cart';

function App() {

  const products = [

    { id: 1, name: 'Minimal Desk Lamp', price: 89.99,  image: 'https://img.freepik.com/free-photo/book-lightbulb-eyewear-pot-simple_1172-307.jpg?uid=R75444130&ga=GA1.1.1670821437.1729439746&semt=ais_hybrid'},
    { id: 2, name: 'Ceramic Coffee Mug', price: 24.99,  image: 'https://img.freepik.com/free-photo/coffee-cup_1339-695.jpg?uid=R75444130&ga=GA1.1.1670821437.1729439746&semt=ais_hybrid'},
    { id: 3, name: 'Leather Notebook', price: 34.99,  image: 'https://img.freepik.com/free-photo/notepad-office-wooden-table_93675-130488.jpg?uid=R75444130&ga=GA1.1.1670821437.1729439746&semt=ais_hybrid'},
    { id: 4, name: 'Bamboo Plant Stand', price: 49.99,  image: 'https://img.freepik.com/free-photo/room-interior-design-with-plants_23-2149155783.jpg?uid=R75444130&ga=GA1.1.1670821437.1729439746&semt=ais_hybrid'},
    { id: 5, name: 'Abstract Wall Art', price: 129.99,  image: 'https://img.freepik.com/free-vector/gold-botanical-cover-collection-template_23-2148825548.jpg?uid=R75444130&ga=GA1.1.1670821437.1729439746&semt=ais_hybrid'},
    { id: 6, name: 'Geometric Bookends', price: 39.99,  image: 'https://modernquests.com/cdn/shop/files/esq-living-hollow-blocks-metal-bookends-set-of-2-black-1.jpg?v=1716723334&width=2048'}
  
  ]

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<LandingPage products={products} />} />
                <Route path="/cart" element={<CartPage products={products} />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
