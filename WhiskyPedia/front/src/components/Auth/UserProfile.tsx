import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './auth.css';

const UserProfile: React.FC = () => {
  const { user, setUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="user-profile">
      <button className="profile-btn" onClick={() => setShowDropdown(!showDropdown)}>
        <span>{user?.userName}</span>
        <img
          src="/path/to/default/profile/image.jpg" // Replace with actual image path or user's profile image
          alt="User Profile"
          className="profile-image"
        />
      </button>
      {showDropdown && (
        <div className="profile-dropdown">
          <ul>
            <li><a href="/trips">관심 품목</a></li>
            <li><a href="/write-review">내 게시물</a></li>
            <li><a href="/notifications">알림</a></li>
            <li><a href="/account-info">계정 정보</a></li>
            <li onClick={handleSignOut}>로그 아웃</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;