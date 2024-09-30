import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

// Button Component
const Button = ({label, onClick, disabled, style}) =>{
    return(
        <button 
        onClick={onClick}
        disabled={disabled}
        style={style}
        className="custom-button"
         >
      {label}
        </button>
    )
}

// Prop Types for validation
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool,
  };
  
  // Default Props
  Button.defaultProps = {
    onClick: () => {},
    style: {},
    disabled: false,
  };

export default Button;