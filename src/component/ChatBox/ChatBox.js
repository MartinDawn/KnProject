import React, { useState } from 'react';
import './ChatBox.css'; // Tạo file CSS riêng cho chat box

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Xin chào! Chúng tôi có thể giúp gì cho bạn?', isUser: false }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, isUser: true }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      {isOpen ? (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Hỗ trợ trực tuyến</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message ${msg.isUser ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Nhập tin nhắn..."
            />
            <button onClick={handleSendMessage}>Gửi</button>
          </div>
        </div>
      ) : (
        <button 
          className="chat-toggle"
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBox;