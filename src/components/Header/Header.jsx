import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'; 

const Header = ({ photo, name, description }) => {
  return (
    <header className="header-container">
      <div className="profile-photo">
        <img src={photo} alt="My Profile" />
      </div>
      <div className="profile-description">
        <h1 className="name scrolling-name">{name}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: 'Kalyani Payyavula',
  description: 'A dedicated front-end developer with a passion for creating user-friendly interfaces using various front-end frameworks. I enjoy collaborating with designers and back-end developers to create seamless user experiences that solve real-world problems, while continually learning and adapting to new technologies and trends in the industry.',
};

export default Header;
