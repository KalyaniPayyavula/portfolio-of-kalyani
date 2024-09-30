import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

const Input = ({value, placeholder}) =>{
return(
    <input
    value = {value}
    placeholder = {placeholder}
    className="custom-input"
    />
)
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string
  };


Input.defaultProps = {
    placeholder: 'Enter text'
};

export default Input;