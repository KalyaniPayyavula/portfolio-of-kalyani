import React from 'react';
import PropTypes from 'prop-types'; 
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Footer = ({ githubUrl, linkedinUrl, address }) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Kalyani. All rights reserved.</p>
                <div className="social-links">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p className="address">{address}</p>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    githubUrl: PropTypes.string.isRequired, 
    linkedinUrl: PropTypes.string.isRequired, 
    address: PropTypes.string.isRequired, 
};

export default Footer;
