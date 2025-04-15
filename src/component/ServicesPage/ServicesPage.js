import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const doctors = [
    {
      id: 1,
      name: "BS. Nguyễn Văn A",
      specialty: "Tim mạch",
      image: "/doctor1.jpg",
      description: "Chuyên gia tim mạch với 15 năm kinh nghiệm",
      vipRequired: "VIP1"
    },
    {
      id: 2,
      name: "BS. Trần Thị B",
      specialty: "Nha khoa",
      image: "/doctor2.jpg",
      description: "Bác sĩ nha khoa thẩm mỹ hàng đầu",
      vipRequired: "VIP2"
    },
    {
      id: 3,
      name: "BS. Lê Văn C",
      specialty: "Thần kinh",
      image: "/doctor3.jpg",
      description: "Chuyên gia thần kinh học",
      vipRequired: "VIP3"
    },
    {
      id: 4,
      name: "BS. Phạm Thị D",
      specialty: "Da liễu",
      image: "/doctor4.jpg",
      description: "Bác sĩ da liễu với nhiều giải thưởng quốc tế",
      vipRequired: "VIP4"
    }
  ];

  return (
    <div className="services-page">
      <h1>Dịch vụ của chúng tôi</h1>
      <div className="doctors-container">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p className="specialty">{doctor.specialty}</p>
              <p>{doctor.description}</p>
              <div className="vip-badge">
                Yêu cầu: <span>{doctor.vipRequired}</span>
              </div>
              <button 
                className="appointment-button"
                disabled={!localStorage.getItem('currentVip')}
              >
                Đặt lịch ngay
              </button>
            </div>
            <div className="doctor-image">
              <img src={doctor.image} alt={doctor.name} />
            </div>
          </div>
        ))}
      </div>
      
      {/* {!localStorage.getItem('currentVip') && (
        <div className="vip-required">
          <h3>Bạn cần đăng ký gói thành viên để sử dụng dịch vụ</h3>
          <p>Các gói thành viên hiện có:</p>
          <ul>
            <li>VIP1 - 500,000đ/tháng</li>
            <li>VIP2 - 800,000đ/tháng</li>
            <li>VIP3 - 1,200,000đ/tháng</li>
            <li>VIP4 - 2,000,000đ/tháng</li>
          </ul>
          <button 
            className="register-button"
            onClick={() => window.location.href = '/register'}
          >
            Đăng ký ngay
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ServicesPage;