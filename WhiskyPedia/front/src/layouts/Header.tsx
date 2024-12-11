import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import SignInModal from '../components/Auth/SignInModal';
import RegisterModal from '../components/Auth/SignUpModal';
import UserProfile from '../components/Auth/UserProfile';
import './layouts.css';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  useEffect(() => {
    console.log('User state in Header:', user);
  }, [user]);

  const handleSignInClick = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const switchToRegister = () => {
    setSignInModalOpen(false);
    setRegisterModalOpen(true);
  };

  const switchToSignIn = () => {
    setRegisterModalOpen(false);
    setSignInModalOpen(true);
  };

  return (
    <header className="header">
      <div className="logo">WhiskyPedia</div>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/discover">찾아보기</a></li>
        <li><a href="/trips">칼럼</a></li>
        <li><a href="/review">리뷰</a></li>
        <li><a href="/more">커뮤니티</a></li>
      </ul>
      <div className="header-right">
        {user ? (
          <UserProfile />
        ) : (
          <button className="sign-in-btn" onClick={handleSignInClick}>
            로그인
          </button>
        )}
      </div>
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} onSwitchToRegister={switchToRegister} />}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} onSwitchToSignIn={switchToSignIn} />}
    </header>
  );
};

export default Header;