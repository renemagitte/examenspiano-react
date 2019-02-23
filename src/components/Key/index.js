import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';


function Key({className, keyCode}) { 

  return (     
      <div className={className} data-key={keyCode}>
      </div> 
  );
  
}

Key.propTypes = {
  className: PropTypes.string.isRequired,
  keyCode: PropTypes.string.isRequired
}

export default Key;