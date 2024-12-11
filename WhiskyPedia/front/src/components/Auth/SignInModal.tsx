// src/components/Auth/SignInModal.tsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { signIn } from '../../apis/Authorisation';
import './auth.css';

interface SignInModalProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose, onSwitchToRegister }) => {
  const { setUser } = useAuth();
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setError(null);
    try {
      const response = await signIn({ userEmail: userEmail, userPassword: userPassword });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        onClose();
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to sign in. Please check your email and password.');
      }
    } catch (error: unknown) {
      console.error('Sign-in failed', error);
      setError('An error occurred during sign in. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>안녕하세요</h2>
        {error && <p className="error-message">{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <label>이메일 주소</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="modal-button" type="submit">
            로그인
          </button>
        </form>
        <p>
          계정이 없으신가요?{' '}
          <button className="switch-button" onClick={onSwitchToRegister}>
            회원가입
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;