// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './component/Header/Header'; 
import './App.css'; 
import ImageSlider from './component/ImageSlider/ImageSlider';
import ChatBox from './component/ChatBox/ChatBox';
import ServicesPage from './component/ServicesPage/ServicesPage';

var i = true
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <ImageSlider></ImageSlider>
      <ChatBox />
    </Router>
  );
}

export default App;
