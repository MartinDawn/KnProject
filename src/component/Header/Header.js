import React, { useState } from 'react';
import './Header.css';
import MembershipModal from '../MembershipModal/MembershipModal'

const Header = () => {
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
 
  const companyInfo = {
    description: "PeakWell là hệ thống chăm sóc sức khỏe hàng đầu với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại.",
    image: "/Company.jpg" // Đường dẫn ảnh công ty
  };

  const navLinks = [
    { title: 'Trang chủ', path: '/' },
    { title: 'Dịch vụ', path: '/services'},
    { title: 'Về chúng tôi', path: '/about' },
    { title: '☎️ 0855-555-555', path: '/' },
    { title: '✉️ abc@gmail.com', path: '/' },
  ];

  return (
    <header className="healthcare-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img 
            src="/Logo.png" 
            alt="Healthcare Logo" 
            className="logo-img"
          />
          <span className="logo-text">PeakWell </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
  <ul className="nav-list">
    {navLinks.map((link) => (
      <li 
        key={link.title} 
        className="nav-item"
        onMouseEnter={() => link.title === 'Về chúng tôi' && setShowAboutDropdown(true)}
        onMouseLeave={() => link.title === 'Về chúng tôi' && setShowAboutDropdown(false)}       
      >
        {link.title === '☎️ 0855-555-555' || link.title === '✉️ abc@gmail.com' ? (
  <div className="nav-link">{link.title}</div>
) : (
  <a href={link.path} className="nav-link">{link.title}</a>
)}
        {/* Dropdown giới thiệu */}
        {link.title === 'Về chúng tôi' && showAboutDropdown && (
          <div className="about-dropdown">
            <div className="about-content">
              <div className="about-image">
                <img src={companyInfo.image} alt="Công ty PeakWell" />
              </div>
              <div className="about-text">
                <h3>Giới thiệu PeakWell</h3>
                <p>{companyInfo.description}</p>
                <a href="/about" className="learn-more">Xem thêm</a>
              </div>
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
</nav>

        {/* CTA Button */}
        <button 
        className="cta-button" 
        onClick={() => setShowMembershipModal(true)}
      >
        Đăng ký thành viên
      </button>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li 
              key={link.title} 
              className="mobile-nav-item"
              onClick={() => {setIsMobileMenuOpen(false)
                if (link.title === 'Về chúng tôi') {
                  // Có thể thêm điều hướng hoặc modal riêng cho mobile
                }
              }
  
              }
            >
              <a href={link.path} className="mobile-nav-link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {showMembershipModal && (
      <MembershipModal onClose={() => setShowMembershipModal(false)} />
    )}
    </header>
  );
};

export default Header;