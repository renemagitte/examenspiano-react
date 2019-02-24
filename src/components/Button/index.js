import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

const Button = ({className, onClick, text, value}) => { 

  return (   

        <button className={className} onClick={onClick} value={value}>
            {text}
        </button>

  );
  
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string
}

export default Button;