// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './component/Header/Header'; 
import './App.css'; 
import ImageSlider from './component/ImageSlider/ImageSlider';
import ChatBox from './component/ChatBox/ChatBox';
import ServicesPage from './component/ServicesPage/ServicesPage';

function App() {
  return (
    
    <Router basename="/">
      <Header />
      <ChatBox />
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<ImageSlider/>} />
        
      </Routes>
      
      
    </Router>
  );
}

export default App;
