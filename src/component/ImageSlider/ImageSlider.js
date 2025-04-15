import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // CSS tùy chỉnh

const ImageSlider = () => {
  // Danh sách ảnh (thay bằng ảnh thực tế của bạn)
  const slides = [
    {
      id: 1,
      title: "Chăm sóc sức khỏe toàn diện",
      desc: "Đội ngũ bác sĩ chuyên môn cao kết hợp AI với những liệu pháp tiên tiến nhất",
      img: "/Doctor1.jpg", // Đặt ảnh trong thư mục public
      ctaText: "Đặt lịch ngay"
    },
    {
      id: 2,
      title: "Chăm sóc sức khỏe toàn diện",
      desc: "Đội ngũ bác sĩ chuyên môn cao kết hợp AI với những liệu pháp tiên tiến nhất",
      img: "/Kid.jpg",
      ctaText: "Đặt lịch ngay"
    },
    {
      id: 3,
      title: "Chăm sóc sức khỏe toàn diện",
      desc: "Đội ngũ bác sĩ chuyên môn cao kết hợp AI với những liệu pháp tiên tiến nhất",
      img: "/Patient.jpg",
      ctaText: "Đặt lịch ngay"
    }
  ];

  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    fade: true // Hiệu ứng fade (tùy chọn)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide-item">
            <div 
              className="slide-image" 
              style={{ backgroundImage: `url(${slide.img})`,backgroundColor: '#f0f0f0' }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <button className="slide-cta">
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;