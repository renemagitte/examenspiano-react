import React from 'react';
import './../App.css';
import '../sass/piano.sass';

function Key(props) { 

  return (     
      <div className={props.className} data-key={props.key}>
      </div> 
  );
  
}

export default Key;