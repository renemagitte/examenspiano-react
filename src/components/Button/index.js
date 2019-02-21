import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

const Button = ({className, onClick, text}) => { 

  return (   

        <button className={className} onClick={onClick}>
            {text}
        </button>

  );
  
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button;