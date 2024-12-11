// src/components/Auth/RegisterModal.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../apis/Authorisation';
import './auth.css';

interface SignUpModalProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const RegisterModal: React.FC<SignUpModalProps> = ({ onClose, onSwitchToSignIn }) => {
  const [userEmail, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [userPassword, setPassword] = useState('');
  const [userPwConfirm, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRegister = async () => {
    setError(null);
    if (userPassword !== userPwConfirm) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await register({
        userEmail,
        userName,
        userPassword,
        userPwConfirm,
      });
      if (response.ok) {
        onClose();
        onSwitchToSignIn(); // Switch to sign-in modal after successful registration
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error: unknown) {
      console.error('Registration failed', error);
      setError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>회원가입</h2>
        {error && <p className="error-message">{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <label>이메일 주소</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>이름</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={userPwConfirm}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="modal-button" type="submit">
            회원가입
          </button>
        </form>
        <p>
          이미 계정이 있으신가요?{' '}
          <button className="switch-button" onClick={onSwitchToSignIn}>
            로그인
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;