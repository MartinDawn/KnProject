import React from 'react';
import PropTypes from 'prop-types';
import './MembershipModal.css'; 

const MembershipModal = ({ onClose = () => {} }) => {
  const membershipPlans = [
    { id: 1, name: "VIP1", price: "500,000đ", benefits: ["Khám tổng quát", "Ưu tiên đặt lịch"] },
    { id: 2, name: "VIP2", price: "800,000đ", benefits: ["Khám tổng quát", "Tư vấn online", "Giảm 10% dịch vụ"] },
    { id: 3, name: "VIP3", price: "1,200,000đ", benefits: ["Khám không giới hạn", "Ưu tiên 24/7", "Giảm 15% dịch vụ"] },
    { id: 4, name: "VIP4", price: "2,000,000đ", benefits: ["Tất cả dịch vụ VIP", "Bác sĩ riêng", "Giảm 20% toàn bộ"] }
  ];

  return (
    <div className="membership-modal-overlay" role="dialog" aria-modal="true">
      <div className="membership-modal">
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Đóng modal"
        >
          ×
        </button>
        
        <h2>Chọn gói thành viên</h2>
        
        <div className="membership-plans">
          {membershipPlans.map(plan => (
            <div key={plan.id} className="membership-card">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.benefits.map((benefit, index) => (
                  <li key={`${plan.id}-benefit-${index}`}>{benefit}</li>
                ))}
              </ul>
              <button 
                className="select-button"
                aria-label={`Chọn gói ${plan.name}`}
              >
                Chọn gói
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MembershipModal.propTypes = {
  onClose: PropTypes.func
};

export default MembershipModal;