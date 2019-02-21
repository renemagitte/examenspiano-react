import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';


function Key({className, key}) { 

  return (     
      <div className={className} data-key={key}>
      </div> 
  );
  
}

Key.propTypes = {
  className: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}

export default Key;